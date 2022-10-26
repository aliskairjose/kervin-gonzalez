import { TestBed } from '@angular/core/testing';

import { NasaService, rover } from './nasa.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe( 'NasaService', () => {
  let service: NasaService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach( () => {
    TestBed.configureTestingModule( {
      imports: [ HttpClientTestingModule ]
    } );
    service = TestBed.inject( NasaService );
  } );

  beforeEach( () => {
    // TODO: Prueba de apis http
    httpClientSpy = jasmine.createSpyObj( 'HttpClient', [ 'get' ] );
    service = new NasaService( httpClientSpy as any );
  } );

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );

  it( 'obtencion de informaición de rovers', ( done: DoneFn ) => {
    const mockData: rover = 'curiosity';
    const mockResponse = {
      photos: [
        {
          "id": 102693,
          "sol": 1000,
          "camera": {
            "id": 20,
            "name": "FHAZ",
            "rover_id": 5,
            "full_name": "Front Hazard Avoidance Camera"
          },
          "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
          "earth_date": "2015-05-30",
          "rover": {
            "id": 5,
            "name": "Curiosity",
            "landing_date": "2012-08-06",
            "launch_date": "2011-11-26",
            "status": "active"
          }
        }
      ]
    };

    // Retornamos el resultado como observable, por eso el uso del operador rxjs of
    httpClientSpy.get.and.returnValue( of( mockResponse ) );

    service.getPhotos( mockData )
    .subscribe( result =>{
      expect(result).toEqual(mockResponse);
      done();
    })

  } );


} );
