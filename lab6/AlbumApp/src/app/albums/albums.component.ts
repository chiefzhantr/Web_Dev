import { Component} from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../albums';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  constructor(private albumsService: AlbumsService) {
    
  } 
  albums: Album[] | undefined;
  newAlbumsTitle: string = '';
  newAlbumsId: number = 0;
  newAlbumsUserId: number = 0;
  ngOnInit() {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
    })
  }
  delete(album: Album) {
    const index = this.albums?.indexOf(album);
    if (index !== undefined && index !== -1) {
      this.albums?.splice(index, 1);
    }
  }

  create() {
    let newAlbum: Album = {
      id: this.newAlbumsId,
      title: this.newAlbumsTitle,
      userId: this.newAlbumsUserId
    };
    this.albums?.push(newAlbum)
  }
}
