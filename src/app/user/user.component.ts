import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data')
  user!: User;
  @Output('onDeleteUser') onDeleteUser = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();

  constructor(private userservice: UserService) { 
  }
  ngOnInit(): void {
  }

  deleteUser(){
    this.onDeleteUser.emit(this.user);
    //this.userservice.deleteUser(this.user);
}
updateUser(){
  this.onSelectUser.emit(this.user);
  //this.userservice.deleteUser(this.user);
}

}
