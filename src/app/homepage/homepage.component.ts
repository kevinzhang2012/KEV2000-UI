import { Component, OnInit } from '@angular/core';

@Component ({
    moduleId: 'module.id',
    selector: 'home',
    templateUrl: 'homepage.component.html',
})

export class HomepageComponent implements OnInit{
    greeting : string = "WELCOME";
    greetings : string [] = ["Kia ora", "欢迎","Bienvenue", "ようこそ","Добро пожаловать","환영","WELCOME"]; 

    ngOnInit() : void {
        let i = 0;
        function TimeoutGreeting(){
            if(i==6){
                i=0;
            } else {i++;}
        }
        function timeoutgreeting(){}
        setInterval(() => {this.greeting=this.greetings[i];TimeoutGreeting()}, 3000);
    }
}