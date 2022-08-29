import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IscrizioneComponent } from './iscrizione/iscrizione.component';
import { LoginComponent } from './login/login.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: environment.domain
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};

@NgModule({
  declarations: [
    AppComponent,
    IscrizioneComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SocialLoginModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.clinetIdGoogle
            )
          }
        ],
        onError: (err: any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
