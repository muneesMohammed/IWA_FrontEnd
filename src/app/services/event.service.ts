import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventItem } from '../data/events-data';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventItem[]> {
    return this.http.get<EventItem[]>(this.apiUrl);
  }

  getEventById(id: string): Observable<EventItem | undefined> {
    return new Observable<EventItem | undefined>((observer) => {
      this.getEvents().subscribe((events: EventItem[]) => {
        observer.next(events.find((e: EventItem) => e.id === id));
        observer.complete();
      });
    });
  }
}
