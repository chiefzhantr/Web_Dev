import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, albums } from '../albums';
import { OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  album: Album | undefined;
  title: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));
    // this.album = albums.find(album => album.id === albumIdFromRoute);
    this.albumsService.getAlbum(albumIdFromRoute).subscribe(album => {
      this.album = album
    })
  }
  
  

  saveNewTitle() {
    if (this.album) {
      this.album.title = this.title;
    }
  }

  
}
