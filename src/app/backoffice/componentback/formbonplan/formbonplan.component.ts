import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
    this.bp.addbp(data).subscribe(response => {
      this.route.navigate([])
    }, (err: HttpErrorResponse) => {
      this.messageErr = err.error
    })
  }
}
