import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
 baseUrl:string = "http://localhost:8080/user";
  signIn(user:any):Observable<string>{
    return this.http.post(this.baseUrl+"/signIn",user,{responseType:'text'});
  }

  signUp(user:any):Observable<string>{
    return this.http.post(this.baseUrl+"/signUp",user,{responseType:'text'});
  }
  
  deleteUser(emailid:any):Observable<string> {
    return this.http.delete(this.baseUrl+"/deleteuser/"+emailid,{responseType:"text"});
  }
  getAllUsers():Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+"/getAllUsers");
  }

  getUserByEmail(emailid:any):Observable<User>{
    
    return this.http.get<User>(this.baseUrl+"/getUser/"+emailid);
  }

  comparePassword(user: User): Observable<boolean> {
    const url = `${this.baseUrl}/comparePassword`;

    return this.http.post<boolean>(url, user);
  }

 updatePassword(user: User): Observable<string> {
  const url = `${this.baseUrl}/updatePassword`;

  return this.http.post(url, user, { responseType: 'text' });
}

}
