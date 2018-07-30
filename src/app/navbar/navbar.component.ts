import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor( public location: Location, private router: Router) { }
  ngOnInit() {
  }
  goBack() {
    this.location.back();
    // console.log(this.location.path());
  }
}
