import { Component, OnInit } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { BGApiService } from '../services/bgapi.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private apiService: BGApiService, private auth: AuthService) { }

  users: User[] = [];
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    

  }

}
