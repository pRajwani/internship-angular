import { Component, OnInit } from '@angular/core';
import { AddNewService } from '../services/add-new.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.scss']
})
export class AddnewComponent implements OnInit {
  uniname;
  registrationDate;
  expiryDate;
  imgUrl;
  NoOfStudents;
  email;
  webUrl;
  contactNo;
  constructor(private addnewService:AddNewService,private route:Router) { }

  ngOnInit(): void {
  }

  createNew(){
    let newData={
      uniname:this.uniname,
      registrationDate:this.registrationDate,
      expiryDate:this.expiryDate,
      imgUrl:this.imgUrl,
      NoOfStudents:this.NoOfStudents,
      email:this.email,
      webUrl:this.webUrl,
      contactNo:this.contactNo
    }
    this.addnewService.createNew(newData).subscribe(()=>{
      //this.route.navigate(['view']);
    })
  }
}
