// src/app/services/program.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProgramItem, PROGRAMS } from '../data/programs-data';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  getPrograms(): Observable<ProgramItem[]> {
    // Later: replace with HTTP call to backend
    // return this.http.get<ProgramItem[]>('api/programs');
    return of(PROGRAMS);
  }

  getProgramById(id: string): Observable<ProgramItem | undefined> {
    // Later: replace with HTTP call to backend
    // return this.http.get<ProgramItem>(`api/programs/${id}`);
    const program = PROGRAMS.find(p => p.id === id);
    return of(program);
  }
}


