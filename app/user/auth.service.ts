import { Injectable } from '@angular/core'
import { IUser } from "./user.model";
@Injectable()
export class AuthService{
    currentUser:IUser
    login(userName:string, password:string){
        this.currentUser = {
            id: 1,
            firstName: 'Tham',
            lastName: 'Davies',
            userName: userName
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    
}