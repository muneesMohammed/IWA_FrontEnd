import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-volunteer',
  imports: [ReactiveFormsModule],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent {
  volunteerForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    // Initialize the form group here if needed
  }
  ngOnInit() {
    this.initform();
  }

  initform() {
    this.volunteerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email]],
      phone: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      education: [''],
      job: ['']
    });
  }

  onSubmit() {
    if (this.volunteerForm.valid) {
      console.log('Form Submitted', this.volunteerForm.value);
      this.apiService.addVolunteer(this.volunteerForm.value).subscribe({
        next: (response) => {
          console.log('Volunteer registered successfully', response);
          // Optionally reset the form or show a success message
          this.volunteerForm.reset();
        },
        error: (error) => {
          console.error('Error registering volunteer', error);
          // Optionally show an error message to the user
        }
      })
    }
  }
}
