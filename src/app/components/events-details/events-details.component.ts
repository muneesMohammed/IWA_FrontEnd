
// src/app/event-detail/event-detail.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import { EventItem } from '../../data/events-data';

@Component({
  selector: 'app-events-details',
  imports: [],
  templateUrl: './events-details.component.html',
  styleUrl: './events-details.component.scss'
})
export class EventsDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  constructor(private eventSvc: EventService) {}

  event: EventItem | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')!;
      this.eventSvc.getEventById(id)
        .subscribe(evt => this.event = evt);
    });
  }
}
