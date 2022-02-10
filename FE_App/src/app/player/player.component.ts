import { Component, OnInit } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { BGApiService } from '../services/bgapi.service';
import { AuthService } from '@auth0/auth0-angular';
import { USApiService } from '../services/usapi.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private apiService: USApiService, private auth: AuthService) { }

  users: User[] = [];
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.apiService.getUsers().then(result =>{
      this.users = result;
    });
    this.auth.isAuthenticated$.subscribe((isAuthenticated) =>{
      this.isLoggedIn = isAuthenticated;
    })

  }

}
