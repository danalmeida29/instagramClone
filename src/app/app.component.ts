import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'instagramClone';

  ngOnInit(): void{

    const firebaseConfig = {
      apiKey: "AIzaSyCNhiq-DYNvTuRHyqvlLyhurm5buBM49gU",
      authDomain: "jta-instagram-clone-be5ee.firebaseapp.com",
      databaseURL:"https://jta-instagram-clone-be5ee-default-rtdb.firebaseio.com/",
      projectId: "jta-instagram-clone-be5ee",
      storageBucket: "jta-instagram-clone-be5ee.appspot.com",
      messagingSenderId: "938417489112",
      appId: "1:938417489112:web:e8125b56c0e500930843ad",
      measurementId: "G-ZQFDBG5TGF"
    };
    
    firebase.initializeApp(firebaseConfig);

  }
}
