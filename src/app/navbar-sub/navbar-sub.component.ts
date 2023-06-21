import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-sub',
  templateUrl: './navbar-sub.component.html',
  styleUrls: ['./navbar-sub.component.css']
})
export class NavbarSubComponent {
  sections = ['Design','Configure', 'Test', 'Troubleshoot', 'Deploy', 'Depricate'];
}
