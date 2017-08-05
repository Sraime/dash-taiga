import { Injectable } from '@angular/core';
import {Member} from "../../models/Member";

@Injectable()
export class MembersService {

  constructor() { }

  public getMembers() : Member[]{
    let members : Member[] = [];
    members.push(new Member("Sobraz", "Scrum Master", 12));
    members.push(new Member("Paul", "Front", 18));
    members.push(new Member("Tardis", "Back", 22));
    return members;
  }

}
