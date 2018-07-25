import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyServiceService {
  private clientId = ' 5cd303096b76455a8ce34b6f1b5f5bec';
  // private artistsUrl = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' + this.clientId + '&q=';
  private artistsUrl = 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF' + this.clientId + '&q=';
  // private url = 'https://api.spotify.com/v1/search?q=hello%2Bworld&type=track,artist,track,playlist' +
  // this.clientId + 'Accept: application/json';
  constructor(private http: Http) { }

  searchArtists(searchTerm: string) {
    const url = this.artistsUrl + searchTerm;
    return this.http.get(url).pipe(map(res => res.json()));
  }
}
