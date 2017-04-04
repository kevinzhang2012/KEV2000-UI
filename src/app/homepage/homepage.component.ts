import { Component, OnInit } from '@angular/core';

@Component ({
    moduleId: 'module.id',
    selector: 'home',
    templateUrl: 'homepage.component.html',
})

export class HomepageComponent implements OnInit{
    greeting : string = "WELCOME!";
    greetings : string [] = ["WELCOME", "Kia ora", "欢迎","Bienvenue", "ようこそ","Добро пожаловать","환영"]; 

    ngOnInit() : void {
        let i = 0;
        function TimeoutGreeting(){
            if(i==6){
                i=0;
            } else {i++;}
        }
        setInterval(() => {this.greeting=this.greetings[i]; console.log(this.greeting);TimeoutGreeting()}, 3000);
    }
}