import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IscrizioneComponent } from './iscrizione/iscrizione.component';

const routes: Routes = [
  { path: 'iscriviti', component: IscrizioneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
