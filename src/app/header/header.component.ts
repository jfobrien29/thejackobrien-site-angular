import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  resumeAlert(): void {
    alert('Resume not currently available. Email me for more info!');
  }
}
