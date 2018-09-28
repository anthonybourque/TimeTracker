import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators
} from "@angular/forms";

import { DataService } from "../data.service";

@Component({
  selector: "app-new-sprint",
  templateUrl: "./new-sprint.component.html",
  styleUrls: ["./new-sprint.component.css"]
})
export class NewSprintComponent implements OnInit {
  sprintRun: boolean = false;
  descriptionEmpty: boolean = true;
  userEmail: string;
  selectedOption: string = "Instant (5s)";
  sprintDuration: number = 5;
  sprintStartTime: string;
  sprintDate: string;
  sprintPercent: number = -1;
  sprintStatus: string;
  sprintPercentSelector: boolean = false;
  sprintDescription: string = "";
  dateFormat = require("dateformat");
  sprintForm: FormGroup;
  notify: string = "yes";

  constructor(
    private router: Router,
    private api: ApiService,
    private formBuilder: FormBuilder,
    private data: DataService
  ) {}

  ngOnInit() {
    this.userEmail = localStorage.getItem("email");
  }

  //event handler for the select element's change event
  selectChangeHandler(event: any) {
    //update the ui
    this.selectedOption = event.target.value;
  }
  //event handler for the select element's change event
  descriptionChangeHandler(event: any) {
    //update the ui
    this.sprintDescription = event.target.value;

    if (this.sprintDescription != "") {
      this.descriptionEmpty = false;
    } else {
      this.descriptionEmpty = true;
    }
  }

  startSprint(): void {
    this.data.ongoingSprint = true;

    let now = new Date();

    this.sprintDate = this.dateFormat(now, "yyyy-mm-dd");
    this.sprintStartTime = this.dateFormat(now, "HH:MM:ss");

    switch (this.selectedOption) {
      case "Instant (5s) ": {
        this.sprintDuration = 5;
        break;
      }
      case "Very short (5min) ": {
        this.sprintDuration = 300;
        break;
      }
      case "Short (15min) ": {
        this.sprintDuration = 900;
        break;
      }
      case "Pomodoro (25min) ": {
        this.sprintDuration = 1500;
        break;
      }
      case "Long (45min) ": {
        this.sprintDuration = 2700;
        break;
      }
      case "Very long (60min) ": {
        this.sprintDuration = 3600;
        break;
      }
    }

    this.data.name = this.selectedOption;
    this.data.duration = this.sprintDuration.toString();
    this.data.description = this.sprintDescription;
    this.data.notify = this.notify;
    this.data.user = this.userEmail;
    this.data.createdAt = this.sprintDate;
    this.data.startedAt = this.sprintStartTime;
  }
}
