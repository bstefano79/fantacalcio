import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  user: SocialUser;


  constructor(public router: Router,private authService: SocialAuthService) {
    
  }
  
  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
  }


  logout(): void{
    if(this.user){     
       this.authService.signOut();
      }
  }
  
  title = 'fantacalcio';
}
