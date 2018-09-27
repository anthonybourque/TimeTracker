import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-footer-sprint',
  templateUrl: './footer-sprint.component.html',
  styleUrls: ['./footer-sprint.component.css']
})
export class FooterSprintComponent implements OnInit {

  constructor(public auth: AuthService,public data:DataService) {
    auth.handleAuthentication();
  }
  userEmail: string;
  ngOnInit() {
    this.userEmail= localStorage.getItem('email');
    this.data.user = localStorage.getItem('email');
  }

}
