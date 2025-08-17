import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROGRAM_DETAILS, ProgramDetail} from '../data/program-details-data';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  getProgramDetails(): Observable<ProgramDetail[]> {
    // Later replace MOCK_CAUSE with an API call using HttpClient
    return of(PROGRAM_DETAILS);
    }
      getProgramById(programId: string): Observable<ProgramDetail | undefined> {
    // later: return this.http.get<EventItem>(`api/events/${id}`);
    const program = PROGRAM_DETAILS.find(p => p.programId === programId);
    return of(program);
  }
}









