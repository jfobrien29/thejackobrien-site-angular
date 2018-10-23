import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {
  private BASE_URI = environment.spotify_url;

  constructor(private http: HttpClient) {}

  getSessionData() {
     return this.http.get(`${this.BASE_URI}data`).toPromise();
  }
}
