import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: any 
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  deleteUser(){
    this.userDeleted.emit(this.user);
    //this.userservice.deleteUser(this.user);
}

}
