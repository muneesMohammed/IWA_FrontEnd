import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-volunteer',
  imports: [ReactiveFormsModule, CommonModule, LoaderComponent,MatSnackBarModule],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent {
  volunteerForm!: FormGroup;
  isSubmitted = false;
  isLoading = true; 
  private _snackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    // Initialize the form group here if needed
  }
  ngOnInit() {
    this.initform();
  }

  initform() {
    this.volunteerForm = this.fb.group({
      name: [null, Validators.required],
      email: [null,],
      phone: [null, Validators.required],
      dob: [null, Validators.required],
      address: [null, Validators.required],
      district: [null, Validators.required],
      state: [null, Validators.required],
      education: [null],
      job: [null]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.volunteerForm);
    if (this.volunteerForm.valid) {
      console.log('Form Submitted', this.volunteerForm.value);
      this.apiService.addVolunteer(this.volunteerForm.value).subscribe({
        next: (response) => {
          console.log('Volunteer registered successfully', response);
          this._snackBar.open('Volunteer registered successfully', 'IWA', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['success-snackbar']
        });
          // Optionally reset the form or show a success message
          this.volunteerForm.reset();
        },
        error: (error) => {
            this._snackBar.open('Somthing went wrong', '',{
            horizontalPosition: 'end',
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
          });
        }
      })
    }
  }
}
