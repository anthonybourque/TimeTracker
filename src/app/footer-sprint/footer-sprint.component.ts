import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-footer-sprint',
  templateUrl: './footer-sprint.component.html',
  styleUrls: ['./footer-sprint.component.css']
})
export class FooterSprintComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
  userEmail: string;
  ngOnInit() {
    this.userEmail= localStorage.getItem('email');
  }

}
