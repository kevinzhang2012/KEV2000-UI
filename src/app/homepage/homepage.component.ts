import { Component, OnInit } from '@angular/core';

@Component ({
    moduleId: 'module.id',
    selector: 'home',
    templateUrl: 'homepage.component.html',
})

export class HomepageComponent implements OnInit{
    greeting : string = "WELCOME!";
    greetings : string [] = ["WELCOME!", "Absolute", "Test"]; 

    ngOnInit() : void {
        let i = 0;
        function TimeoutGreeting(){
            if(i==2){
                i=0;
            } else {i++;}
        }
        setInterval(() => {this.greeting=this.greetings[i]; console.log(this.greeting);TimeoutGreeting()}, 2000);
    }
}