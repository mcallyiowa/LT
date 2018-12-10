import {Component, Input, OnInit} from '@angular/core';
import {Photo} from '../../../models/photo';

@Component({
  selector: 'app-photo-thumbnail',
  templateUrl: './photo-thumbnail.component.html',
  styleUrls: ['./photo-thumbnail.component.css']
})
export class PhotoThumbnailComponent implements OnInit {
  @Input() photo: Photo;
  constructor() { }
  ngOnInit() {
  }
}
