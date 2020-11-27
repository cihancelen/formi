import { Component } from '@angular/core';
import mockData from 'projects/formi/src/lib/mock-data';
import { InputTypes } from 'projects/formi/src/lib/models/formi.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo-formi';

  loginSchema = mockData.FORM;

  submit() {
    console.log('submitted');
  }

  loginSubmit($event) {
    console.log($event);
  }
}
