import { Component } from '@angular/core';
import { Photo } from './core/interfaces/photo';
import { NasaService, rover } from './core/services/nasa.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'NASA Mars Rovers';
  photos: Photo[] = [];
  isLoading = false;

  constructor(
    private nasaSrv: NasaService,
  ) {
    this.getPhotos()
  }

  getPhotos( rover: rover = 'spirit' ): void {
    this.isLoading = true;
    this.nasaSrv
      .getPhotos( rover )
      .subscribe(
        response => this.photos = [ ...response.photos ],
        error => console.error(error),
        () => this.isLoading = false
      );
  }

}
