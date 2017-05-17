import { Component, OnInit } from '@angular/core';

@Component ({
    moduleId: 'module.id',
    selector: 'home',
    templateUrl: 'homepage.component.html',
})

export class HomepageComponent implements OnInit{
    greeting : string = "WELCOME";
    greetings : string [] = ["WELCOME", "欢迎","Bienvenue", "ようこそ","환영","欢迎","WELCOME"]; 
    hideHomepage : boolean = true;
    diableContents: boolean = true;

    ngOnInit() {
        let i = 0;
        function TimeoutGreeting(){
            if(i==6){
                i=0;
            } else {i++;}
        }
        function timeoutgreeting(){}
        setInterval(() => {this.greeting=this.greetings[i];TimeoutGreeting()}, 3000);
    }
    ngAfterContentChecked(){
        this.hideHomepage = false;    
        setTimeout(() => {this.diableContents = false;}, 1000);
    }
}