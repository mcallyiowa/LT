import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumComponent } from './album-list/album/album.component';
import { PhotoThumbnailComponent } from './album-list/album/photo-thumbnail/photo-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumComponent,
    PhotoThumbnailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
