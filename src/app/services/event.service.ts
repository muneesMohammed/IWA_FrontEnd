// src/app/services/event.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventItem, EVENTS } from '../data/events-data';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getEvents(): Observable<EventItem[]> {
    // later: return this.http.get<EventItem[]>('api/events');
    return of(EVENTS);
  }

  getEventById(id: string): Observable<EventItem | undefined> {
    // later: return this.http.get<EventItem>(`api/events/${id}`);
    const event = EVENTS.find(e => e.id === id);
    return of(event);
  }
}
