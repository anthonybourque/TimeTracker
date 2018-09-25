import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-sprint-tab',
  templateUrl: './sprint-tab.component.html',
  styleUrls: ['./sprint-tab.component.css']
})
export class SprintTabComponent implements OnInit {


constructor(public auth: AuthService,public router: Router) {

  if(!auth.isAuthenticated()){
  this.router.navigate(['/about']);
  }
}

  ngOnInit() {
 

  }
  
  public componentSelector(): boolean{
    return document.getElementById('btnPastSprint').classList.contains('active');
  }

  public pastSprint(): void {
    document.getElementById('btnNewSprint').classList.remove('active');
    document.getElementById("btnPastSprint").classList.toggle('active');
    


  }
  public newSprint(): void {
    document.getElementById("btnNewSprint").classList.toggle('active');
    document.getElementById('btnPastSprint').classList.remove('active');
    
      }
 
}
