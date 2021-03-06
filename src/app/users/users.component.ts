import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'app-users',
    templateUrl:'./users.component.html',
    styleUrls : ['./users.component.css']
})
export class UsersComponent implements OnInit{
    title = 'UTENTI';
    users : any;

    constructor(private service: UserService) {
        this.users = service.getUsers();
    }
    ngOnInit(){
        this.users = this.service.getUsers();
    }
    
}