import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a:string = 'Palak';
  b={enroll:1,name:"xyz"};
  c:boolean=true;
  cities:string[]=["Delhi","Mumbai","Kolkata","chennai"]
  xyz(){
    alert("welcome to my page");
  }
}
