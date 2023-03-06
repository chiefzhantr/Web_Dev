import { Component } from '@angular/core';
import { AlbumPhotos} from '../albums';
import { OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  albumPhotos : AlbumPhotos[] | undefined;

  constructor(private albumsService: AlbumsService, private route: ActivatedRoute) {
    
  } 

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));
    this.albumsService.getAlbumPhotos(albumIdFromRoute).subscribe(albumPhotos => {
      this.albumPhotos = albumPhotos;
    })
  }
}
