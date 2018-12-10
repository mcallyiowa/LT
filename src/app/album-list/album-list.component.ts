import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../photo.service';
import {Album} from '../models/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  public albums: Album[];
  public selectedAlbum: Album;
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getAlbums().subscribe((item: Album[]) => {
      this.albums = item;
    });
  }
  onClick(album: Album) {
    if (this.selectedAlbum != null && this.selectedAlbum.id === album.id) {
      this.selectedAlbum = null;
    } else {
      this.selectedAlbum = album;
    }
  }
  isAlbumSelected(album: Album) {
    return (this.selectedAlbum != null && this.selectedAlbum.id === album.id);
  }
}
