import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  navbarAnimate = "invisible";

  constructor (private userService: UserService){}
  
  ngOnInit():void {
    setTimeout(() => this.navbarAnimate="animated fadeInDown",1000);
  }
  signUp(email:String, password:String, confirmPassword:String): void {
    // console.log(email);
    // console.log(password);
    // console.log(confirmPassword);
    
    this.userService.create(email, password, confirmPassword)
    .then( 
      () => {});

    // this.userService.create(email, password, confirmPassword)
    //         .subscribe(
    //             data => {
    //                 console.log("Signup successed!")
    //             },
    //             error => {
    //                 console.log("Signup failed!")
    //             });
    
  }
  login(email:String, password:String):void {
    console.log(email);
    console.log(password);
        this.userService.login(email, password)
    .then( 
      () => {});
  }
}
