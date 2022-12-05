import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categoie',
  templateUrl: './categoie.component.html',
  styleUrls: ['./categoie.component.css']
})
export class CategoieComponent implements OnInit {
listcategorie:any=[]
upcategorie={
  nomcat:'',
  id:''
}
  constructor(private ct:CategorieService) {
this.ct.getallcategorie().subscribe(data=>{this.listcategorie=data.cat,
console.log(data)
})
   }

  ngOnInit(): void {
  }
delete(id:any,i:number){
  this.ct.deletecategorie(id).subscribe(Response=>{
    console.log(Response)
    this.listcategorie.splice(i,1)
  })
}
getcategorie(nomcat:string,id:any){
this.upcategorie.nomcat=nomcat
this.upcategorie.id=id
}
updatecategorie(f:any){
  let data=f.value
  console.log(data)
  this.ct.updatecategorie(this.upcategorie.id,data).subscribe(response=>{
    console.log(response)
    let indexId=this.listcategorie.findIndex((object:any)=>object.id==this.upcategorie.id)
    this.listcategorie[indexId].nomcat=data.nomcat
  },(err:HttpErrorResponse)=>{console.log(err.message)
})
}
}
