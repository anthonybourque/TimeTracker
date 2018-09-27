import { Component, OnInit } from '@angular/core';
import { Window } from 'selenium-webdriver';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { DataService } from '../data.service'



@Component({
  selector: 'app-past-sprint',
  templateUrl: './past-sprint.component.html',
  styleUrls: ['./past-sprint.component.css']
})
export class PastSprintComponent implements OnInit {

  sprint: any;
  displayedColumns = ['name', 'status', 'createdAt','startedAt', 'finishedAt', 'description'];
  dataSource = new SprintDataSource(this.api);
  constructor(private api: ApiService,public data:DataService) { }


  ngOnInit() {
    
    
  }

}
export class SprintDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getSprints();
  }

  disconnect() {

  }
}
