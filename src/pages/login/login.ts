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
    public auth: AuthProvider,
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login() {
    console.log(this.userid, this.password);
    const toast = this.toastCtrl.create({
      message: "user id or password cannot be null",
      duration: 2000
    });
    if (!(this.userid && this.password)) {
      toast.present();
    }
    if(this.userid && this.password){
      if(this.auth.login(this.userid, this.password)){
        this.navCtrl.push(HomePage);
      };
    }
  }

  register() {
    this.navCtrl.push(SignupPage);
  }
}
