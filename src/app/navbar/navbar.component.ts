import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  toggleNave = false;
  openNav() {
    this.toggleNave = !this.toggleNave;
  }
}
