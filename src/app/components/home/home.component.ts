import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';

declare var $: any; // Declare jQuery

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
  
export class HomeComponent implements AfterViewInit {

     constructor(private spinner: NgxSpinnerService) {}
  
    showSpinner() {
      this.spinner.show();
  
      setTimeout(() => {
        this.spinner.hide();
      }, 500); // hide after 2 seconds
    }
    

  ngAfterViewInit(): void {
    // Initialize Owl Carousel after the view is ready
    $('.hero-slider-three-active').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 8000,
      smartSpeed: 1300,
      items: 1,
      navText: [
        '<i class="fal fa-long-arrow-left"></i>',
        '<i class="fal fa-long-arrow-right"></i>'
      ]
    });
  }
}







