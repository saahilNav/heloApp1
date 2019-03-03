import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'heloApp1';
  public youT="sahil sharma yo";
  
  inputVar="hi am parent and data sent from parent";
  
  texts:string =" ";
  emailN:any='';
  onFun(){
    console.log("welcome ji");
    this.texts="yeah baby";
  }
  isActive:boolean=true;
  multipleclas="color bgcolor";

text1:any="";
  getEmail(email){
   this.text1=email;
  }
  onclickEMail(){
    console.log(this.emailN)
  }

}