import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DeleteService } from '../services/delete.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private deleteSerive:DeleteService) { }
  id;
  ngOnInit(): void {
    this.id=this.data.id;
  }

  onDelete(){
    this.deleteSerive.delete(this.id).subscribe();
  }

}
