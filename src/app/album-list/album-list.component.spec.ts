import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumListComponent } from './album-list.component';
import {AlbumComponent} from './album/album.component';
import {AppComponent} from '../app.component';
import {PhotoThumbnailComponent} from './album/photo-thumbnail/photo-thumbnail.component';
import {HttpClientModule} from '@angular/common/http';

describe('AlbumListComponent', () => {
  let component: AlbumListComponent;
  let fixture: ComponentFixture<AlbumListComponent>;

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
    fixture = TestBed.createComponent(AlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('isAlbumSelected is true', () => {
    component.selectedAlbum = {id: 1, title: ''};
    expect(component.isAlbumSelected({id: 1, title: ''})).toBeTruthy();
  });
  it('isAlbumSelected is false', () => {
    component.selectedAlbum = {id: 1, title: ''};
    expect(component.isAlbumSelected({id: 2, title: ''})).toBeFalsy();
  });
  it('onClick albumSelected', () => {
    component.selectedAlbum = null;
    component.onClick({id: 2, title: ''});
    expect(component.selectedAlbum.id).toBe(2);
  });
  it('onClick albumDeSelected', () => {
    component.selectedAlbum = {id: 1, title: ''};
    component.onClick({id: 1, title: ''});
    expect(component.selectedAlbum).toBeFalsy();
  });
});
