import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule,RouterModule, NgxSpinnerModule, NgxSpinnerModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  
})
export class HeaderComponent {

   constructor(private spinner: NgxSpinnerService) {}

  showSpinner() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 500); // hide after 2 seconds
  }
  
}
