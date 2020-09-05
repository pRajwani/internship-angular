import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router) { }
  user;
  ngOnInit(): void {
    if(localStorage.getItem('username')){
      this.user=localStorage.getItem('username');
    }
  }
  logout(){
    localStorage.removeItem('username');
    this.route.navigate(['login'])
  }
}
