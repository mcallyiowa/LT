import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumComponent } from './album.component';
import {PhotoThumbnailComponent} from './photo-thumbnail/photo-thumbnail.component';
import {AppComponent} from '../../app.component';
import {AlbumListComponent} from '../album-list.component';
import {HttpClientModule} from '@angular/common/http';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AlbumListComponent,
        AlbumComponent,
        PhotoThumbnailComponent
      ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    component.album = {id: 1, title: ''};
    component.selectedAlbum = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have list of photos', () => {
    component.album = {id: 1, title: ''};
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      console.log(component.photos);
      expect(component.photos).toBeTruthy();
    });
  });
});
