
import { Injectable } from "@angular/core";

@Injectable()
export class AuthProvider {
  /* Array to store user values */
  user = [{u:'vinod', p:'Vinod@12345'}];
  constructor() {
    console.log("Hello AuthProvider Provider");
  }

  /* login user */
  login(user:string, pass:string) {
    let userstatus = this.user.some(u=>u.u == user && u.p == pass)
    console.log(userstatus)
    return userstatus;
  }

  /* signup user */
  signup(u:string, p:string) {

  }
}
