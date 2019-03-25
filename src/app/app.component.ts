import { Component } from '@angular/core';

/** @Component is metadata definition of component
 * selector: the component's CSS element selector
 * templateUrl: the location of the component's template file
 * styleUrls: the location of component's private CSS styles.
*/
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
