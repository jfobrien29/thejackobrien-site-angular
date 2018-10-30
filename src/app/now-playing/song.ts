import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export class Song {
    sessionData: any;
    songTitle: string;
    songAlbumImage: string;
    externalLink: string;
    spotifyUri: SafeUrl;
    artists: string;
    hasMultipleArtists: boolean;
    review: string;
    hasThoughts: boolean;

    timeLeft: number;

    constructor(data, private sanitizer: DomSanitizer) {
        this.sessionData = data;
        this.songTitle = this.sessionData.item.name;
        this.songAlbumImage = this.sessionData.item.album.images[0].url;
        this.externalLink = this.sessionData.item.external_urls.spotify;
        this.spotifyUri = this.sanitize(this.sessionData.item.uri);

        const progress = this.sessionData.progress_ms;
        const duration = this.sessionData.item.duration_ms;
        this.timeLeft = duration - progress;

        this.artists = this.sessionData.item.artists.reduce((artistString, currArtist, index) => {
            return (index === 0) ? currArtist.name : artistString + ', ' + currArtist.name;
        }, '');

        this.hasMultipleArtists = this.sessionData.item.artists.length > 1;
        this.review = this.sessionData.review.trim();
        this.hasThoughts = this.review !== '';
    }

    sanitize(uri: string) {
        return this.sanitizer.bypassSecurityTrustUrl(uri);
    }
}