import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { SignupPage } from "../signup/signup";
import { ToastController } from "ionic-angular";
import { AuthProvider } from "../../providers/auth/auth";
import { HomePage } from "../home/home";
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  userid: string;
  password: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public auth: AuthProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login() {
    console.log(this.userid, this.password);

    if (!(this.userid && this.password)) {
      this.toastmsg("user id or password cannot be null");
    }
    if (this.userid && this.password) {
      console.log(this.auth.login(this.userid, this.password));
      let status = this.auth.login(this.userid, this.password);
      if (!status) {
        this.toastmsg("user id or password is incorrect");
      }
      if (status) {
        this.toastmsg("user authenticated");
        this.navCtrl.push(HomePage);
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

  register() {
    this.navCtrl.push(SignupPage);
  }
}
