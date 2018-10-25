import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Song } from './song';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
  isLoading: boolean;
  isPlaying: boolean;
  data: any;
  song: Song;

  constructor(private spotifyService: SpotifyService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.isLoading = true;
    this.spotifyService.getSessionData().then(data => {
      this.data = data;
      this.isPlaying = this.data.isPlaying;
      if (this.isPlaying) {

        this.song = new Song(this.data, this.sanitizer);
      }

      setTimeout(() => { this.isLoading = false; }, 1000);
    });
  }
}
