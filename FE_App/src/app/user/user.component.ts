import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USApiService } from '../services/usapi.service';
import { User } from '@auth0/auth0-angular';
import { BGApiService } from '../services/bgapi.service';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
}
