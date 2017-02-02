import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  navbarAnimate = "invisible";
  ngOnInit():void {
    setTimeout(() => this.navbarAnimate="animated fadeInDown",1000);
  }
}
