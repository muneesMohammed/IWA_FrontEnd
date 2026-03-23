import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgramDetail } from '../data/program-details-data';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private apiUrl = 'http://localhost:8080/api/programs';

  constructor(private http: HttpClient) {}

  getProgramDetails(): Observable<ProgramDetail[]> {
    return this.http.get<ProgramDetail[]>(this.apiUrl);
  }

  getProgramById(programId: string): Observable<ProgramDetail | undefined> {
    return this.http.get<ProgramDetail>(`${this.apiUrl}/${programId}`);
  }
}
