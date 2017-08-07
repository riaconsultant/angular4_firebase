import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  restaurant = ['r1','r2','r3','r4'];
  items:FirebaseListObservable<any[]>;
  item:FirebaseObjectObservable<any>;
  obj:FirebaseObjectObservable<any>;
  locations;
  private subscription;
  absolute:FirebaseObjectObservable<any>;

  constructor(private db:AngularFireDatabase){
    
    //afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
    this.items=db.list('/location');
    
    // relative URL, uses the database url provided in bootstrap
    this.obj = db.object('/Contact');
    // absolute URL
    this.absolute = db.object('https://papper-4d3b5.firebaseio.com/Contact');
    const itemObservable=db.object('/item');
    itemObservable.set({name:"mann"});
    //itemObservable.set({a:''});
    itemObservable.update({sisname:"janvi"});
    const delObservable=db.object('/item/name');
    delObservable.remove();
    
    console.log("db");
    this.item=db.object('/item');
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //subscribe methods
    this.subscription=this.db.list('/location').subscribe(x=>{
      this.locations=x;
      console.log(this.locations);
    })
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
  save(newName: string) {
    this.item.set({ name: newName });
    this.items.push({value:newName});
    }
    update(newSize: string) {
      this.item.update({ size: newSize });
    }
    delete() {
      this.item.remove();
    }
}
