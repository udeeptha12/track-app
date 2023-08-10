import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private router:Router,
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) {}


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  async login() {
    let email = this.loginForm.get('email')?.value;
    let pwd = this.loginForm.get('password')?.value;

    await this.afAuth.signInWithEmailAndPassword(email!, pwd!).then(response => {
      this.router.navigateByUrl('./dashboard');
    });
  }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

}

