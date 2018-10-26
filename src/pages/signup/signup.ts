import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { AuthProvider } from "../../providers/auth/auth";
import { LoginPage } from "../login/login";

@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  userid: string;
  password: string;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthProvider,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
  }

  signup() {
    if (!(this.userid && this.password)) {
      this.toastmsg("user id or password cannot be null");
    }

    if (this.userid && this.password) {
      this.auth.signup(this.userid, this.password);
      if (this.auth.user.find(u => u.u == this.userid)) {
        this.toastmsg("user registered successfully");
        this.navCtrl.popTo(LoginPage);
      }
    }
  }

  toastmsg(msg) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });

    toast.present();
  }
}
