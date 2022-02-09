import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }
  user: any = {}
  ngOnInit(): void {
      this.auth.user$.subscribe((userInfo: any) => {
        this.user = userInfo;
      })
  }
}
