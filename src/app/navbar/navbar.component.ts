import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('nav') nav!: HTMLElement;
  constructor() { }
  showMenu!: boolean;

  ngOnInit(): void {
    this.showMenu = false;
  }
  
  enableMenu() {
    this.showMenu = !this.showMenu;
  }
}
