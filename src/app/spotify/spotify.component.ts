import { Component, OnInit } from '@angular/core';
import { SpotifyServiceService } from '../shared/spotify-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {
  inputField: FormControl = new FormControl();
  searchResults: any[] = [];

  constructor(private spotifyService: SpotifyServiceService) { }

  ngOnInit() {
    this.inputField.valueChanges
    .subscribe(inputField => this.spotifyService.searchArtists(inputField)
    .subscribe(result => {
      if (result.status === 400) {
        return;
      } else { this.searchResults = result.artists.items; }
    }));
  }

}
