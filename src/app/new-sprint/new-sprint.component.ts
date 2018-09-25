import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-new-sprint',
  templateUrl: './new-sprint.component.html',
  styleUrls: ['./new-sprint.component.css']
})
export class NewSprintComponent implements OnInit {
 
  sprintRun : boolean = false;
  descriptionEmpty : boolean = true;
  selectedOption: string;
  sprintDuration: number = 5;
  sprintStartTime: number;
  sprintEndTime: number;
  sprintDate:string;
  sprintPercent:number = -1 ;
  sprintStatus: string;  
  sprintPercentSelector:boolean = false;
  isEnd:boolean = false;
  
  dateFormat = require('dateformat');
  




  constructor() { }
  
  ngOnInit() {
    

  }
  

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedOption = event.target.value;

  }
  txtDescription: string = '';

  //event handler for the select element's change event
  descriptionChangeHandler (event: any) {
    //update the ui
    this.txtDescription = event.target.value;
    console.log(this.txtDescription);

    if(this.txtDescription != ""){
      this.descriptionEmpty = false;
    }else{
      this.descriptionEmpty = true;
    }

  }
  
  newSprint(): void{
   
   


  }

  startSprint(): void{   
  
    let now = new Date();
    
  this.sprintDate = this.dateFormat(now, "dd-mm-yyyy");
  this.sprintStartTime = this.dateFormat(now, "HH-MM-ss");

    this.sprintStartTime =  Date.now();
    switch(this.selectedOption) { 
      case "Instant (5s) ": { 
        this.sprintDuration = 5;
         break; 
      } 
      case "Very short (5min) ": { 
         this.sprintDuration = 300;
         break; 
         
      }
      case "short (15min) ": { 
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

  if(this.sprintRun == true){
    this.sprintRun = false;  
  }else{
    this.sprintRun = true;

    
  }

 }
  stopSprint():void{
    
    let now = new Date();
    this.sprintEndTime = this.dateFormat(now, "HH-MM-ss");
   

  }

 
  sprintEnd():void{

    this.isEnd = true;
    document.getElementById('btnNewSprint').classList.remove('active');
    document.getElementById("btnPastSprint").classList.toggle('active');
    document.getElementById("btnPastSprint").addEventListener('*ngIf', this.isEnd.valueOf);
    
    
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
      }else{


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
