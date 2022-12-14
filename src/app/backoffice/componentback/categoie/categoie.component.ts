import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categoie',
  templateUrl: './categoie.component.html',
  styleUrls: ['./categoie.component.css']
})
export class CategoieComponent implements OnInit {
listcategorie:any=[]
catfilter!:string;
upcategorie={
  nomcat:'',
  id:''
}
  constructor(private ct:CategorieService,private toaster:ToastrService,private route:Router) {
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
    this.toaster.success('Categorie Supprimer avec succé')
  },(error)=>{
    this.toaster.error('error','error')

      })
}
getcategorie(nomcat:string,id:any){
this.upcategorie.nomcat=nomcat
this.upcategorie.id=id
}
updatecategorie(f:any){
  let data=f.value;
 console.log(data);
  this.ct.updatecategorie(this.upcategorie.id,data).subscribe((response) =>{

    console.log(response)
let indexid=this.listcategorie.findIndex((obj:any)=>obj.id==this.upcategorie.id)
this.listcategorie[indexid].nomcat=data.nomcat
this.route.navigate(['/back/categorie'])
this.toaster.success('Categorie Modifier avec succé')
},(error)=>{
  this.toaster.error('error','error')

    });

}
}
