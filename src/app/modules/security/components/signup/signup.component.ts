import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GoogleAuthProvider} from "firebase/auth";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) {
  }


  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  async signup() {
    let email = this.signupForm.get('email')?.value;
    let pwd = this.signupForm.get('password')?.value;

    await this.afAuth.createUserWithEmailAndPassword(email!, pwd!).then(response => {
      console.log(response);
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
