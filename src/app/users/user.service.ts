import { Injectable } from "@angular/core";

export class UserService{

    getUsers(){
        return[
            
        {
            name: 'stefano1',
            lastname: 'sissio',
            fiscalcode: 'SFTNENE76M98D663J',
            email:'ciccio@hotmail.com',
            phone:'345345345345',
            province:'Torino',
            age: 46
            
        },
        {
            name: 'stefano2',
            lastname: 'sissio',
            fiscalcode: 'SFTNENE76M98D663J',
            email:'ciccio@hotmail.com',
            phone:'345345345345',
            province:'Torino',
            age: 46
        },
        {
            name: 'stefano3',
            lastname: 'sissio',
            fiscalcode: 'SFTNENE76M98D663J',
            email:'ciccio@hotmail.com',
            phone:'345345345345',
            province:'Torino',
            age: 46
        }
        ]
    }
}