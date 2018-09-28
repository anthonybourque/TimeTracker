import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { SprintTabComponent } from '../sprint-tab/sprint-tab.component';
import { DataService } from '../data.service';


@Component({
  selector: 'app-ongoing-sprint',
  templateUrl: './ongoing-sprint.component.html',
  styleUrls: ['./ongoing-sprint.component.css']
})
export class OngoingSprintComponent implements OnInit {

  sprintRun : boolean = false;
  descriptionEmpty : boolean = true;
  userEmail:string;
  selectedOption: string;
  sprintDuration: number = 5;
  sprintStartTime: number;
  sprintEndTime: number;
  sprintDate:string;
  sprintPercent:number = -1 ;
  sprintStatus: string;  
  sprintPercentSelector:boolean = false;
  saveValidator:boolean = false;
  sprintDescription: string = '';
  
  dateFormat = require('dateformat');
  


  sprintForm: FormGroup;
 
  
  
  progress:string='';  

 
  
  finishedAt:string='';


  constructor(private data:DataService,private api: ApiService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.sprintForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'duration' : [null, Validators.required],
      'status' : [null, Validators.required],
      'progress' : [null, Validators.required],
      'description' : [null, Validators.required],
      'notify' : [null, Validators.required],
      'user' : [null, Validators.required],
      'createdAt' : [null, Validators.required],
      'startedAt' : [null, Validators.required],
      'finishedAt' : [null, Validators.required]
    });

  }

 
  stopSprint():void{
    
    let now = new Date();
    this.data.finishedAt = this.dateFormat(now, "HH:MM:ss");
    this.data.status = "Completed at ("+ this.sprintPercent+" %)";
    
    this.sprintForm.patchValue({name: this.data.name ,duration:this.data.duration ,status:this.data.status ,progress:this.sprintPercent,description:this.data.description,notify:this.data.notify,user: this.data.user ,createdAt:this.data.createdAt,startedAt:this.data.startedAt,finishedAt:this.data.finishedAt})
    this.api.postSprint(this.sprintForm.value).subscribe(res => {
      
      this.data.activeTab = "past";
      this.data.ongoingSprint = false;
    }, err => {
      console.log(err);
    });
  }

 
  sprintEnd():void{    
    this.data.status = "Completed";
    let now = new Date();
    this.data.finishedAt = this.dateFormat(now, "HH:MM:ss");
    
    this.sprintForm.patchValue({name: this.data.name ,duration:this.data.duration ,status:this.data.status ,progress:this.sprintPercent,description:this.data.description,notify:this.data.notify,user: this.data.user ,createdAt:this.data.createdAt,startedAt:this.data.startedAt,finishedAt:this.data.finishedAt})
    
    this.api.postSprint(this.sprintForm.value).subscribe(res => {
      
      this.data.activeTab = "past";
      this.data.ongoingSprint = false;
    }, err => {
      console.log(err);
    });
   
        
  }
 
  

  getPercent():void{
  
      if(this.sprintPercent < 100){
        if(this.sprintPercentSelector==false){
          this.sprintPercentSelector = true;
        }else{
          this.sprintPercentSelector = false;
          
          this.sprintPercent+=1;
        console.log(this.sprintPercent);

        }
      }else if(!this.saveValidator){
        this.saveValidator = true;
        console.log("test122");
        this.sprintEnd();

      }
    
  
  }
  formatSubtitle = (percent: number) : string => {
    if(percent >= 100){
      return "Congratulations!"
    }else if(percent >= 50){
      return "Half"
    }else if(percent > 0){
      return "Just began"
    }else {
      return "Not started"
    }
  }

}
