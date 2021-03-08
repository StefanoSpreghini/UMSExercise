import { PathLocationStrategy } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-users',
    templateUrl:'./users.component.html',
    styleUrls : ['./users.component.css']
})
export class UsersComponent implements OnInit{
    title = 'UTENTI';
    users : any;
    @Output() updateUser = new EventEmitter<User>();

    constructor(private service: UserService) {
        this.users = service.getUsers();
    }
    ngOnInit(){
        this.users = this.service.getUsers();
    }
    onDeleteUser(user : any){
        this.service.deleteUser(user);
    }
    onSelectUser(user : any){
       this.updateUser.emit(user);
    }
}