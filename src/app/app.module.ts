import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { UserLogComponent } from './user-log/user-log.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { SprintTabComponent } from './sprint-tab/sprint-tab.component';
import { PastSprintComponent } from './past-sprint/past-sprint.component';
import { NewSprintComponent } from './new-sprint/new-sprint.component';
import { FooterSprintComponent } from './footer-sprint/footer-sprint.component';
import { HttpClientModule } from '@angular/common/http';

import { OngoingSprintComponent } from './ongoing-sprint/ongoing-sprint.component'
import { NgCircleProgressModule } from 'ng-circle-progress';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    UserLogComponent,
    LoginComponent,
    CallbackComponent,
    SprintTabComponent,
    PastSprintComponent,
    NewSprintComponent,
    FooterSprintComponent,
    OngoingSprintComponent,
 

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: '',redirectTo: 'about', pathMatch: 'full'},
      {path: 'callback', component: CallbackComponent}]),
      
      RouterModule.forChild([
        {path: 'about', component: AboutComponent},
        {path: 'login', component: LoginComponent},        
        {path: 'sprint', component: SprintTabComponent}
      
      ]),
      NgCircleProgressModule.forRoot({
        // set defaults here
        radius: 100,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: "#78C000",
        innerStrokeColor: "#C7E596",
        animationDuration: 150,
        percent: 100
        
      }),FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatProgressSpinnerModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule
    


   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
