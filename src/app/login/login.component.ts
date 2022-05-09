import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faUser, faKey} from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faGooglePlusSquare} from '@fortawesome/free-brands-svg-icons';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
 
})
export class LoginComponent implements OnInit {

  user: SocialUser;

  constructor(private authService: SocialAuthService, private router: Router) { }

  faUser = faUser;
  faKey = faKey;
  faFacebookSquare = faFacebookSquare;
  faGooglePlusSquare = faGooglePlusSquare;
  GoogleLoginProvider = GoogleLoginProvider;



  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      if(user)
        this.router.navigate(['/']);
    });
  }

  singninGoogle(): void{
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
