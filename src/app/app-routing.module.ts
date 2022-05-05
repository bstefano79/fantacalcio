import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IscrizioneComponent } from './iscrizione/iscrizione.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'iscriviti', component: IscrizioneComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
