import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Album} from '../../models/album';
import {Photo} from '../../models/photo';
import {PhotoService} from '../../photo.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit, OnChanges {
  @Input() public album: Album;
  @Input() public selectedAlbum: boolean;
  public photos: Photo[];
  constructor(private photoService: PhotoService) { }
  ngOnChanges(changeObj) {
    if (this.selectedAlbum) {
      this.photoService.getPhotos(this.album.id).subscribe((item: Photo[]) => {
        this.photos = item;
      });
    }
  }
  ngOnInit() {
    this.photoService.getPhotos(this.album.id).subscribe((item: Photo[]) => {
      this.photos = item;
    });
  }

}
