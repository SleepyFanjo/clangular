import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClankGameComponent } from './clank-game/clank-game.component'
import { IntroComponent } from './intro/intro.component'

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'clank', component: ClankGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
