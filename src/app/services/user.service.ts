import { Injectable } from "@angular/core";

export class UserService{

    users = [
            
        {
            name: 'stefano1',
            lastname: 'sissio1',
            fiscalcode: 'SFTNENE76M98D663J',
            email:'ciccio@hotmail.com',
            phone:'345345345345',
            province:'Torino',
            age: 46
            
        },
        {
            name: 'stefano2',
            lastname: 'sissio2',
            fiscalcode: 'SFTNENE76M98D663J',
            email:'ciccio@hotmail.com',
            phone:'345345345345',
            province:'Torino',
            age: 46
        },
        {
            name: 'stefano3',
            lastname: 'sissio3',
            fiscalcode: 'SFTNENE76M98D663J',
            email:'ciccio@hotmail.com',
            phone:'345345345345',
            province:'Torino',
            age: 46
        }
        ]

    getUsers(){
        return this.users;
    }
    deleteUser(user: any){
        let index = this.users.indexOf(user);
        if(index >= 0){
            this.users.splice(index,1);
        }
    }
}