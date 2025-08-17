import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EVENT_DETAILS, EventDetail } from '../../data/events-details-data';

@Component({
  selector: 'app-events-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss']
})
export class EventsDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);

  event: EventDetail | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.event = EVENT_DETAILS.find(e => e.eventId === id);
    }
  }
}
