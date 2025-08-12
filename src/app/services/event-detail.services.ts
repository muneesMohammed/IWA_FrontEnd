
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventDetail, EVENT_DETAILS } from '../data/events-details-data';

@Injectable({
  providedIn: 'root'
})
export class EventDetailService {

  getEvents(): Observable<EventDetail[]> {
    // later: return this.http.get<EventItem[]>('api/events');
    return of(EVENT_DETAILS);
  }

  getEventById(eventId: string): Observable<EventDetail | undefined> {
    // later: return this.http.get<EventItem>(`api/events/${id}`);
    const event = EVENT_DETAILS.find(e => e.eventId === eventId);
    return of(event);
  }
}

