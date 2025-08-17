import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsItem, NEWS } from '../data/news-data';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  getNews(): Observable<NewsItem[]> {
    // Later: replace with HTTP call to backend
    // return this.http.get<ProgramItem[]>('api/programs');
    return of(NEWS);
  }

  getNewsById(id: number): Observable<NewsItem | undefined> {
    // Later: replace with HTTP call to backend
    // return this.http.get<ProgramItem>(`api/programs/${id}`);
    const news = NEWS.find(n => n.id === id);
    return of(news);
  }
}
