import { Component } from '@angular/core';

@Component({
  selector: 'ng-lang-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  constructor(){
    throw new Error('test!');
  }
}
