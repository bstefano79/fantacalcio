import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public user : SocialUser | undefined;

  constructor(public router: Router,private authService: SocialAuthService) {
  }

  ngOnInit(): void {
    console.log('onint');
    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }

  logout(): void{
    //console.log('logout');
    if(this.user){
       this.authService.signOut();
       //this.user = new SocialUser;
    }
  }
  
  title = 'fantacalcio';
}
