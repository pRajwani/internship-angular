import { Component, OnInit} from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userId='';
  password='';
  
  constructor(private loginService:LoginService,private route:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  login(){
    let userData={userId:this.userId,password:this.password}
    console.log("Login Button Clicked");
    console.log(userData)
    this.loginService.login(userData).subscribe((result)=>{
      if(result.success==true){
        localStorage.setItem('username',result.user.userId)
        this.route.navigate(['home'])
      }
      if(result.success==false){
        this.dialog.open(DialogOverviewExampleDialog)
      }
    })
  }
}

@Component({
  selector: 'incorrectdialog',
  templateUrl: 'incorrectdialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(){}
}

