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

  constructor (
    private userService: UserService
  ){}

  ngOnInit():void {
    setTimeout(() => this.navbarAnimate="animated fadeInDown",1000);
  }
  signUp(email:String, password:String, confirmPassword:String): void {
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
    //this.userService.signUp
  }
}
