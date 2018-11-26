import { Component } from '@angular/core';

//Below is the decorator which is a function and expects an object.
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html'

})

//This is the code all your methods, members will be de declare in the class
// export will let you use this class in other components.
export class AppComponent{
  pageTitle: string = ' ACME Product Management!'
}