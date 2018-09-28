import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class DataService {
  ongoingSprint: boolean = false;
  name: string = "";
  duration: string = "";
  status: string = "";
  progress: string = "";
  description: string = "";
  notify: string = "";
  user: string = "";
  createdAt: string = "";
  startedAt: string = "";
  finishedAt: string = "";
  activeTab = "past";

  constructor() {}
}
