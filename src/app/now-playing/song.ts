import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

export class Song {
    data: any;
    songTitle: string;
    songAlbumImage: string;
    externalLink: string;
    spotifyUri: SafeUrl;
    artists: string;
    hasMultipleArtists: boolean;
    review: string;
    hasThoughts: boolean;

    constructor(data, private sanitizer: DomSanitizer) {
        this.data = data;
        this.songTitle = this.data.item.name;
        this.songAlbumImage = this.data.item.album.images[0].url;
        this.externalLink = this.data.item.external_urls.spotify;
        this.spotifyUri = this.sanitize(this.data.item.uri);

        this.artists = this.data.item.artists.reduce((artistString, currArtist, index) => {
            return (index === 0) ? currArtist.name : artistString + ', ' + currArtist.name;
        }, '');

        this.hasMultipleArtists = this.data.item.artists.length > 1;
        this.review = this.data.review;
        this.hasThoughts = this.review !== '';
    }

    sanitize(uri: string) {
        return this.sanitizer.bypassSecurityTrustUrl(uri);
    }
}