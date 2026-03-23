import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgramItem } from '../data/programs-data';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private apiUrl = 'http://localhost:8080/api/programs';

  constructor(private http: HttpClient) {}

  getPrograms(): Observable<ProgramItem[]> {
    return this.http.get<ProgramItem[]>(this.apiUrl);
  }

  getProgramById(id: string): Observable<ProgramItem | undefined> {
    return new Observable<ProgramItem | undefined>((observer) => {
      this.getPrograms().subscribe((programs: ProgramItem[]) => {
        observer.next(programs.find((p: ProgramItem) => p.id === id));
        observer.complete();
      });
    });
  }
}
