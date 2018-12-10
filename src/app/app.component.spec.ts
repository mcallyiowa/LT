import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AlbumListComponent} from './album-list/album-list.component';
import {AlbumComponent} from './album-list/album/album.component';
import {PhotoThumbnailComponent} from './album-list/album/photo-thumbnail/photo-thumbnail.component';
import {HttpClientModule} from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AlbumListComponent,
        AlbumComponent,
        PhotoThumbnailComponent
      ],
      imports: [HttpClientModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'photo-app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('photo-app');
  }));
});
