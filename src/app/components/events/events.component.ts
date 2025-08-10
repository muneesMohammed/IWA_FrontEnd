
// src/app/events-list/events-list.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventService } from '../../services/event.service';
import { EventItem } from '../../data/events-data';
import { CommonModule }     from '@angular/common'; 

@Component({
  selector: 'app-events',
  imports: [
    CommonModule,              // <-- needed for ngIf, ngStyle, ngClass…
    RouterModule               // <-- if you’re linking to detail pages
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})

export class EventsComponent implements OnInit {
  events: EventItem[] = [];
  filteredEvents: EventItem[] = [];
  activeCategory: string = 'all';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
      this.filteredEvents = events;
    });
  }

  filterByCategory(category: string): void {
    this.activeCategory = category;
    if (category === 'all') {
      this.filteredEvents = this.events;
    } else {
      this.filteredEvents = this.events.filter(e => e.categories.includes(category));
    }
  }
}