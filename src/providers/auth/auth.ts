
import { Injectable } from "@angular/core";

@Injectable()
export class AuthProvider {
  /* Array to store user values */
  user = [];
  authstatus : Boolean = false;
  constructor() {
    console.log("Hello AuthProvider Provider");
  }

  /* login user */
  login(user:string, pass:string) {
    this.authstatus = this.user.some(u=>u.u === user && u.p === pass);
    return this.authstatus;
  }

  /* signup user */
  signup(usr:string, pass:string) {
    if(usr && pass){
      this.user.push({u:usr, p:pass});
    }
    
  }
}
