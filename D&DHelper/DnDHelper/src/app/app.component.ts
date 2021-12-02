import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D&DHelper';
  constructor(){}
}
const firebaseConfig = {
  apiKey: "AIzaSyCfHgFQQWmDy52vebacEC0c9K2YuxrN34Q",
  authDomain: "dndhelper-ee140.firebaseapp.com",
  projectId: "dndhelper-ee140",
  storageBucket: "dndhelper-ee140.appspot.com",
  messagingSenderId: "441480847710",
  appId: "1:441480847710:web:b1e94a80f748d90a882fcf",
  measurementId: "G-4DMZTN0F48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
