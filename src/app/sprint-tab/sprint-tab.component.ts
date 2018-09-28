import { Component, OnInit, Output } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router, RouterLink } from "@angular/router";
import { EventEmitter } from "protractor";
import { DataService } from "../data.service";

@Component({
  selector: "app-sprint-tab",
  templateUrl: "./sprint-tab.component.html",
  styleUrls: ["./sprint-tab.component.css"]
})
export class SprintTabComponent implements OnInit {
  constructor(
    public auth: AuthService,
    public router: Router,
    public data: DataService
  ) {
    if (!auth.isAuthenticated()) {
      this.router.navigate(["/about"]);
    }
  }

  ngOnInit() {}

  public pastSprint(activeTab): void {
    this.data.activeTab = activeTab;
  }
  public newSprint(activeTab): void {
    this.data.activeTab = activeTab;
  }
}
