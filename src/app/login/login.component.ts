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

  constructor(private authService: SocialAuthService, private router: Router) { }

  public faUser = faUser;
  public faKey = faKey;
  public faFacebookSquare = faFacebookSquare;
  public faGooglePlusSquare = faGooglePlusSquare;

  public user : SocialUser | undefined;

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
