import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  paymentHandler: any = null;
  stripeAPIKey: any = 'sk_test_51MDASDLtBuFc9f6IcbpcBmHigR1LiuffNI5tVBNKM7Nt8Gv0HUdPNMPK7YY8b6K5wniys87T6pRHOqfrB4jEi7W800vnmuDPbU';
  constructor(private panierservic: PanierService, private tostrservice:ToastrService) { }
listeItems: any;
reservation: any;
panier: any;
prixtotal: number=0;
success: boolean = false
  
failure:boolean = false
  ngOnInit(): void {
    this.panierservic.getpanier().subscribe((data) =>{this.listeItems = data.lignepanier;this.calculprixtotal(data.lignepanier)});
    this.invokeStripe();
   
   
   
  }
calculprixtotal(list:any){
  console.log(list);
  list.forEach((element: any) => {
    console.log(element)
    this.prixtotal +=  parseInt(element.prixticket)*parseInt(element.quantite);
    
  });console.log(this.prixtotal);}
  delete(idpanier:any, iditem:any ){
    console.log(idpanier,iditem)
    this.panierservic.deletpanier(iditem,idpanier,1).subscribe({
      next:(result)=>{this.tostrservice.success( 'supprimer   avec success');
      },
      error:(err)=>{this.tostrservice.success('error','error');},
      complete:()=>{this.ngOnInit()}
    })
}


makePayment(amount: number){
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: this.stripeAPIKey,
    locale: 'auto',
    token: function (stripeToken: any) {
      console.log(stripeToken);
      alert('Stripe token generated!');
      paymentstripe(stripeToken) ;
    },
  });
  const paymentstripe = (stripeToken: any) => {
    this.panierservic.makePayment(stripeToken).subscribe({next:(data: any) => {
      console.log(data);
      if (data.data === "success") {
        this.success = true
      }
      else {
        this.failure = true
      }
    },error:(err)=>{console.log(err);},});
  };
  paymentHandler.open({
    name: 'Evenement réservée',
    description: '',
    amount: amount,
   
  });
}
invokeStripe() {
  if (!window.document.getElementById('stripe-script')) {
    const script = window.document.createElement('script');

    script.id = 'stripe-script';
    script.type = 'text/javascript';
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.onload = () => {
      this.paymentHandler = (<any>window).StripeCheckout.configure({
        key: this.stripeAPIKey,
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
          alert('Payment has been successfull!');
        },
      });
    };

    window.document.body.appendChild(script);
  }
}

}
