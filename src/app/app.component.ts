import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Photo } from './core/interfaces/photo';
import { NasaService, rover } from './core/services/nasa.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'nasa';
  photos: Photo[] = [];

  /* photos: Photo[] = [
    {
      "id": 301536,
      "sol": 1000,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215136972EDNAS00P1585L0M1-BR.JPG",
      "earth_date": "2006-10-27",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 301537,
      "sol": 1000,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215137010EDNAS00P1585L0M1-BR.JPG",
      "earth_date": "2006-10-27",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 301538,
      "sol": 1000,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215137048EDNAS00P1585L0M1-BR.JPG",
      "earth_date": "2006-10-27",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 301539,
      "sol": 1000,
      "camera": {
        "id": 29,
        "name": "NAVCAM",
        "rover_id": 7,
        "full_name": "Navigation Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215137086EDNAS00P1585L0M1-BR.JPG",
      "earth_date": "2006-10-27",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 341822,
      "sol": 1000,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/1000/2P215138639ESFAS00P2600L8M1-BR.JPG",
      "earth_date": "2006-10-27",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    },
    {
      "id": 341823,
      "sol": 1000,
      "camera": {
        "id": 30,
        "name": "PANCAM",
        "rover_id": 7,
        "full_name": "Panoramic Camera"
      },
      "img_src": "http://mars.nasa.gov/mer/gallery/all/2/p/1000/2P215138639ESFAS00P2600R8M1-BR.JPG",
      "earth_date": "2006-10-27",
      "rover": {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete"
      }
    }
  ] */

  constructor(
    private nasaSrv: NasaService,
    private spinner: NgxSpinnerService,
  ) {
    this.loadData()
   }

  loadData(rover: rover = 'spirit'): void {
    this.spinner.show();
    this.nasaSrv.getPhotos(rover).subscribe( res => {
      this.spinner.hide();
      this.photos = [ ...res.photos ];
    } );
  }

}
