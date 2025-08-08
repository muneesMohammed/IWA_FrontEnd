import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from "./components/home/home.component";
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
     FooterComponent,
     CommonModule,
     CarouselModule,
     RouterModule,
     RouterOutlet
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'IWA';
  carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
}