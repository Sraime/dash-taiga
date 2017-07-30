import { Component, OnInit } from '@angular/core';
import {MembersService} from "../../services/members/members.service";
import {Member} from "../../models/Member";

@Component({
  selector: 'app-members-list',
  templateUrl: 'members-list.component.html',
  styleUrls: ['members-list.component.css']
})
export class MembersListComponent implements OnInit {

  members : Member[];
  constructor( service : MembersService) {
    this.members = service.getMembers();
  }

  ngOnInit() {
  }

}
