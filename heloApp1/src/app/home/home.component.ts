import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  currentValue: boolean = true;


text1:any="";
  getEmail(email){
   this.text1=email;
  }

show(event){
console.log(event);
}
inputVaria:string="thiss is angular2";

touppercase(){
  this.text1=this.text1.toUpperCase();
}
tolowercase(){
  this.text1=this.text1.toLowerCase();

}
employe:any=
  {
 id:'3',
 name:"jhonC",
 experience:'3 years'
};

}
