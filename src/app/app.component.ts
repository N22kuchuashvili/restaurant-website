// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[RouterOutlet, RouterModule]
})
export class AppComponent {
  title = 'Restaurant Website';
}
