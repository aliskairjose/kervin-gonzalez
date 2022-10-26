import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { Response } from '../interfaces/photo';
import { environment } from 'src/environments/environment';

export type rover = 'spirit' | 'curiosity' | 'opportunity';

@Injectable( {
  providedIn: 'root'
} )
export class NasaService {

  private baseUrl = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  /**
   * @descriptio Listado de rovers
   * @param rover Tipo de rover curiosity | opportunity | spirit
   * @returns Listado de fotos segun el rover
   */
  getPhotos( rover: rover ): Observable<Response> {
    return this.http.get<Response>( `${this.baseUrl}/${rover}/photos?sol=1000&api_key=${environment.api_key}` )
  }
}
