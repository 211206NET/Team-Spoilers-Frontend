import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-btn',
  templateUrl: './auth-btn.component.html',
  styleUrls: ['./auth-btn.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AuthBtnComponent implements OnInit {

  constructor(public auth: AuthService) { }

  logIn(){
    this.auth.loginWithRedirect();
  }

  logOut(){
    this.auth.loginWithRedirect();
  }
  loggedIn: boolean = false;
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isLoggedIn) =>{
      this.loggedIn = isLoggedIn;
    })
  }

}
