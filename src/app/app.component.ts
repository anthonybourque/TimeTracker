import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "SprintTuto";
  constructor(public auth: AuthService, private data: DataService) {
    auth.handleAuthentication();
  }
}
