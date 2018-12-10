import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from './models/album';
import {Photo} from './models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=';
  private albums: Observable<Album[]>;
  private photos: Observable<Photo[]>;
  constructor(private http: HttpClient) { }
  public getAlbums(): Observable<Album[]> {
    this.albums = this.http.get<Album[]>(this.albumsUrl);
    return this.albums;
  }
  public getPhotos(albumId: number): Observable<Photo[]> {
    this.photos = this.http.get<Photo[]>(this.photosUrl + albumId);
    return this.photos;
  }
}
