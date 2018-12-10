import { TestBed, inject } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import {HttpClientModule} from '@angular/common/http';
import {Photo} from './models/photo';
import {Album} from './models/album';

describe('PhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoService],
      imports: [HttpClientModule]
    });
  });
  it('should be created', inject([PhotoService], (service: PhotoService) => {
    expect(service).toBeTruthy();
  }));
  it('getPhotos should return list of photos with albumId = 1', inject([PhotoService], (service: PhotoService) => {
    service.getPhotos(1).subscribe((photos: Photo[]) => {
      photos.forEach((photo: Photo) => {
        expect(photo.albumId).toBe(1);
      });
    });
  }));
  it('getAlbums should return list of albums', inject([PhotoService], (service: PhotoService) => {
    service.getAlbums().subscribe((albums: Album[]) => {
      expect(albums).toBeTruthy();
    });
  }));
});
