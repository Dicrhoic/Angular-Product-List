import { Component } from '@angular/core';
import { SideTabs } from './side-nav-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product-List';
  tabs = SideTabs;
}
