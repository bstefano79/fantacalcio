import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faUser, faKey} from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faGooglePlusSquare} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
 
})
export class LoginComponent implements OnInit {

  constructor() { }

  public faUser = faUser;
  public faKey = faKey;
  public faFacebookSquare = faFacebookSquare;
  public faGooglePlusSquare = faGooglePlusSquare;

  ngOnInit(): void {
  }

}
