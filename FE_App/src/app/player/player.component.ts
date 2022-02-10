import { Component, OnInit } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { BGApiService } from '../services/bgapi.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private apiService: BGApiService, private auth: AuthService) { }

  users: User[] = [];
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.apiService.getUser().then(result =>{
      this.users = result;
    });
    this.auth.isAuthenticated$.subscribe((isAuthenticated) =>{
      this.isLoggedIn = isAuthenticated;
    })

  }

}
