import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventDetail } from '../data/events-details-data';

@Injectable({
  providedIn: 'root'
})
export class EventDetailService {
  private apiUrl = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventDetail[]> {
    return this.http.get<EventDetail[]>(this.apiUrl);
  }

  getEventById(eventId: string): Observable<EventDetail | undefined> {
    return this.http.get<EventDetail>(`${this.apiUrl}/${eventId}`);
  }
}
