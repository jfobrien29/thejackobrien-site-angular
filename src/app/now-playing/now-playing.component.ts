import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
  isLoading: boolean;
  isPlaying: boolean;
  data: any;
  songTitle: string;
  songAlbumImage: string;
  externalLink: string;
  spotifyUri: SafeUrl;
  artists: string;
  hasMultipleArtists: boolean;
  review: string;

  constructor(private spotifyService: SpotifyService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.isLoading = true;
    this.spotifyService.getSessionData().then(data => {
      this.data = data;
      this.isPlaying = this.data.isPlaying;
      if (this.isPlaying) {
        this.songTitle = this.data.item.name;
        this.songAlbumImage = this.data.item.album.images[0].url;
        this.externalLink = this.data.item.external_urls.spotify;
        this.spotifyUri = this.sanitize(this.data.item.uri);
        this.artists = this.data.item.artists.reduce((artistString, currArtist, index) => {
          return (index === 0) ? currArtist.name : artistString + ', ' + currArtist.name;
        }, '');
        this.hasMultipleArtists = this.data.item.artists.length > 1;
        this.review = this.data.review;
      }

      setTimeout(() => { this.isLoading = false; }, 1000);
    });
  }

  sanitize(uri: string) {
    return this.sanitizer.bypassSecurityTrustUrl(uri);
  }
}
