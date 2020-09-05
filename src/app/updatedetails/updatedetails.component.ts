import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateService } from '../services/update.service';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.scss']
})
export class UpdatedetailsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data1:any,private updateService:UpdateService) { }
  data
  ngOnInit(): void {
    
    this.data={
      _id:this.data1.data._id,
      uniname:this.data1.data.uniname,
      registrationDate:this.data1.data.registrationDate,
      expiryDate:this.data1.data.expiryDate,
      imgUrl:this.data1.data.imgUrl,
      NoOfStudents:this.data1.data.NoOfStudents,
      email:this.data1.data.email,
      webUrl:this.data1.data.webUrl,
      contactNo:this.data1.data.contactNo
    }
  }

  updateDetails(){
    this.updateService.update(this.data).subscribe()
  }
}
