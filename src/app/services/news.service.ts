import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsItem } from '../data/news-data';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:8080/api/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(this.apiUrl);
  }

  getNewsById(id: number): Observable<NewsItem | undefined> {
    return this.http.get<NewsItem>(`${this.apiUrl}/${id}`);
  }
}
