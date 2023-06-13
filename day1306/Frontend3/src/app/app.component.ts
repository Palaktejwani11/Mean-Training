import { Component } from '@angular/core';
import { xyz } from './m1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  abc()
  { let obj=new xyz();
  obj.method();
} 

}
