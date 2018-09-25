import { Component, OnInit } from '@angular/core';
import { Window } from 'selenium-webdriver';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-past-sprint',
  templateUrl: './past-sprint.component.html',
  styleUrls: ['./past-sprint.component.css']
})
export class PastSprintComponent implements OnInit {

  sprint: any;
  displayedColumns = ['lenght', 'status', 'date','start', 'finish', 'description'];
dataSource = new SprintDataSource(this.api);
  constructor(private api: ApiService) { }


  ngOnInit() {
    this.api.getSprints()
    .subscribe(res => {
      console.log(res);
      this.sprint = res;
    }, err => {
      console.log(err);
    });
    
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
