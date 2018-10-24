import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blog/blog.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';

const routes: Routes = [
  // {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: LandingComponent},
  {path: 'nowPlaying', component: NowPlayingComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
