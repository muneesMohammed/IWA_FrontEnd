import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

declare var $: any; // Declare jQuery

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

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







