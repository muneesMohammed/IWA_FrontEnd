import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 

  }
  baseUrl = 'https://uym3zhq2j2226x335o2lrcf6wm0qrdce.lambda-url.ap-south-1.on.aws/'

  getVolunteers():Observable<any> {
    return this.http.get(`${this.baseUrl}volunteer/get-all-volunteers`);
  }

  addVolunteer(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}volunteer/create-volunteer`, data);
  }
  
}
