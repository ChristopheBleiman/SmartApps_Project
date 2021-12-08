import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login.model'

import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  login$!: Observable<Login | null | undefined>;

  constructor(
    private afAuth: AngularFireAuth, // Inject Firebase auth service
    private afs: AngularFirestore,
    private router: Router
  ) {
    // Get the auth state, then fetch the Firestore user document or return null
    this.login$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<Login>(`logins/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
  }

  // Sign in with Google
  async googleSignIn() {
    console.log("lmao");
    let provider = new firebase.auth.GoogleAuthProvider();
    let credentials = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credentials.user);
  }

  private updateUserData(user: any) {
    let loginRef: AngularFirestoreDocument<Login> = this.afs.doc(`logins/${user.uid}`);

    let data = {
      userID: user.uid
    }

    return loginRef.set(data, { merge: true })
  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/']);
  }
}