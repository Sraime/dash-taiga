import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project/project.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import {MembersService} from "./services/members/members.service";

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    MembersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
