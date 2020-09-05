import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from "@angular/material/dialog";
import { UpdatedetailsComponent } from '../updatedetails/updatedetails.component';
import { ViewAllService } from '../services/view-all.service';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  displayedColumns: string[] = ['Univ-Name', 'Registration Date', 'Expiry Date', 'imgUrl','No of Students',
                                'email','webUrl','contact number','edit','delete'];
  dataSource:MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private viewAllService:ViewAllService,public dialog: MatDialog) { }

  ngOnInit() {
    this.viewAllService.getAll().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }
  ngAfterViewInit() {
    
  }
  openDialog(row){
    let dilaogRef=this.dialog.open(UpdatedetailsComponent,{data:{data:row}});
    dilaogRef.afterClosed().subscribe(result=>{
      if(result)
      location.reload();
    })
  }
  opendDialog(id){
    let dilaogRef=this.dialog.open(DeleteComponent,{data:{id:id}});
    dilaogRef.afterClosed().subscribe((result)=>{
      if(result)
      location.reload();
    })
  }
}

