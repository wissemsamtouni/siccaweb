import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BonplansService } from 'src/app/services/bonplans.service';

@Component({
  selector: 'app-formbonplan',
  templateUrl: './formbonplan.component.html',
  styleUrls: ['./formbonplan.component.css']
})
export class FormbonplanComponent implements OnInit {
  messageErr = ""
 
  constructor(private bp: BonplansService, private route: Router) {

  }

 
  ngOnInit(): void {
  }
  add(f: any) {
    let data = f.value
    console.log(data);
    this.bp.addbp(data).subscribe(response => {
      this.route.navigate(['/showbonplan'])
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error
    })
  }
}
