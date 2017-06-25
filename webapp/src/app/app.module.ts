import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { StudentNavigationComponent } from './student-navigation/student-navigation.component';
import { StudentSearchComponent } from './student-search/student-search.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HomeComponent,
    StaffComponent,
    StudentNavigationComponent,
    StudentSearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path:"home",
      component:HomeComponent
    },
    {
      path:"staff",
      component:StaffComponent
    },
    {
      path:"student",
      component:StudentComponent
    },
    {
      path:"student/search",
      component:StudentSearchComponent
    },
    {
      path:"student/payments",
      component:StudentComponent
    },
    {
      path:"student/marks",
      component:StudentComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
