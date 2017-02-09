import { Component,OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public user: User;

  title = 'app works!';

  public toggles = [
    { value: 'seeking', display: 'Toggled' },
    { value: 'posting', display: 'UnToggled' },
  ];

  ngOnInit() {
    this.user = {
      name: '',
      isActive: false,
      toggle: this.toggles[1].value,
    }
  }

}

