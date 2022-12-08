import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {  FormControl, FormGroup} from '@angular/forms';

import {EvenementService} from "../../../services/evenement.service";
import {evenement} from "../../../model/evenement";
import {HttpClient} from "@angular/common/http";

import {ToastrService} from 'ngx-toastr'


@Component({
  selector: 'app-formevent',
  templateUrl: './formevent.component.html',
  styleUrls: ['./formevent.component.css']
})
export class FormeventComponent implements OnInit {
aaa!: string;
countevent : number=0;

  @ViewChild('inputimage', {static: false}) inputimage!: ElementRef;
  @ViewChild('inputtitre') inputtitre!: ElementRef;
  @ViewChild('inputdescription') inputdescription !: ElementRef;
  @ViewChild('inputdated') inputdated !: ElementRef;
  @ViewChild('inputdatef') inputdatef !: ElementRef;
  @ViewChild('inputprix') inputprix !: ElementRef;
  @ViewChild('inputnbrticket') inputnbrticket !: ElementRef;
  form: FormGroup = new FormGroup({
    titre: new FormControl(''),
    discription: new FormControl(''),
    datedebut: new FormControl(''),
    datefin: new FormControl(''),
    image: new FormControl(),
    inputprix: new FormControl(),
    inputnbrticket: new FormControl()
  })

  listevent!: evenement[];
  evennement!: evenement;

  updateevenet={
    titre:'',
    Idevent:'',
    discription :'',
    datedebut : '',
  datefin :'',
  nbrticket : '',

  prixticket:'',

  }


  /*search(){
    this.listevent =  this.listevent.filter((e)=> e.titre.includes(this.aaa));
    console.log(this.listevent);
  }*/


  /*form: FormGroup = new FormGroup({
    Description :  new FormControl(''),
    Image: new FormControl('')
  });*/


  /*submitted = false;
  validationImage = "erreur";*/

  constructor(private eventService: EvenementService,
              private http: HttpClient,
              private tostrservice:ToastrService) {


  }

  ngOnInit(): void {
    this.evennement = new evenement();
    this.eventService.getallevent().subscribe((data) => this.listevent=(data.event),);

    // how count the number of listevent in the database
    this.eventService.getallevent().subscribe((data) => this.countevent=(data.event).length,);



  }

  ajouterevenement() {
    console.log(this.evennement);
    this.eventService.addevent(this.evennement).subscribe((data: evenement) => this.listevent);
  }


  submit(): void {
    try {
      const image = this.inputimage.nativeElement.files[0];
      const titre = this.inputtitre.nativeElement.value;
      const discription = this.inputdescription.nativeElement.value;
      const datedebut = this.inputdated.nativeElement.value;
      const datefin = this.inputdatef.nativeElement.value;
      const nbrticket = this.inputnbrticket.nativeElement.value;
      const prixticket = this.inputprix.nativeElement.value;
      const formData = new FormData();
      formData.set('titre', titre);
      formData.set('discription', discription);
      formData.set('datedebut', datedebut);
      formData.set('datefin', datefin);
      formData.set('nbrticket', nbrticket);
      formData.set('prixticket', prixticket);
      console.log(formData.get('image'));
      formData.set('image',image);

      console.log(formData.get('titre'))
      this.http.post('/api/event/add', formData).subscribe({
      next:(reponse
    :
      any
    ) =>
      {
        this.tostrservice.success('Ajouter avec success');

      }
    ,

      error:(error) => {
        this.tostrservice.error('error', 'error');
      }
    }

      )


    } catch (error) {
      console.log(error);
    }

  }

  // calculer le nombre des evenement dans la base de donnée

   //comment affichier les evenement dans le ta



delete(id:any ){
    this.eventService.deleteevent(id).subscribe({
      next:(result)=>{alert("suppression")
        // @ts-ignore
        this.tostrservice.success( 'suppression avec success');



      },
      error:(err)=>{this.tostrservice.success('error','error');},
      complete:()=>{this.ngOnInit()}
    })
}
  getevenemeny(event:evenement){
    this.evennement=event;

}
 // getevenemeny () {
  // this.eventService.getedit().subscribe(
   //   {
     //   next: (result: any) => {
       //   this.listevent = result

        //},
        //error: (err: any) => {
        //},
        //complete: () => {
          //this.getedit(this.listevent[0])
       // }
      //}
    //)
  //}



updateevenement(){

  // @ts-ignore
  this.eventService.updateevent(this.evennement.id, this.evennement).subscribe(
    {
      next: (result) => {
        this.tostrservice.success( 'Modifier evenement avec success');
      },
      error:(err)=>{this.tostrservice.success('error','error');},
      complete:()=>{this.ngOnInit()}
    }

  )
}




}


   /* this.form = this.formBuilder.group(
      {
        Description: ['',Validators.required],
        Image: ['', Validators.required],


      }

    );

  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onImageChangeFromFile($event:any)
  {
      if ($event.target.files && $event.target.files[0]) {
        let file = $event.target.files[0];
        console.log(file);
          if(file.type == "image/jpeg") {
            console.log("correct");

          }
          else {
            //call validation
            this.form.reset();
            this.form.controls["Image"].setValidators([Validators.required]);


          }
      }
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }
DateD: any;
DateF  : any;

ComparesonDate() :boolean{
  const datedebut = new Date(this.DateD);
  const datefin = new Date(this.DateF);
  if (datedebut < datefin) {
    return false;
  }else {
    return true;

  }


}*/

