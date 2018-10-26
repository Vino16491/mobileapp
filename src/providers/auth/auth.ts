
import { Injectable } from "@angular/core";

@Injectable()
export class AuthProvider {
  /* Array to store user values */
  user = [];
  constructor() {
    console.log("Hello AuthProvider Provider");
  }

  /* login user */
  login(user:string, pass:string) {
    let userstatus = this.user.some(u=>u.u == user && u.p == pass);
    return userstatus;
  }

  /* signup user */
  signup(usr:string, pass:string) {
    if(usr && pass){
      this.user.push({u:usr, p:pass});
    }
    
  }
}
