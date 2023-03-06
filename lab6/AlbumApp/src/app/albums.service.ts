import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './albums';
import { AlbumPhotos } from './albums';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private albumsURL = 'https://jsonplaceholder.typicode.com/albums';
  private albumPhotosURL = 'https://jsonplaceholder.typicode.com/albums/';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsURL);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.albumPhotosURL}/${id}`);
  }

  getAlbumPhotos(id: number): Observable<AlbumPhotos[]> {
    return this.http.get<AlbumPhotos[]>(this.albumPhotosURL + String(id) + '/photos');
  }

}