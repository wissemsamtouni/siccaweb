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
  stripeAPIKey: any = 'pk_test_51MDASDLtBuFc9f6ITsWNl0DjpGO9xM1WnUDpzpeP0e9Rv8IE35sjlFHQE9oCvGCxGFpAJyZdJV8xXxDNnamcJqfw00MDn3JGTy';
  constructor(private panierservic: PanierService, private tostrservice:ToastrService) { }
listeItems: any;
reservation: any;
panier: any;
  ngOnInit(): void {
    this.panierservic.getpanier().subscribe((data) =>{this.listeItems = data.lignepanier});
    this.invokeStripe();
  }

  delete(idpanier:any, iditem:any ){
    console.log(idpanier,iditem)
    this.panierservic.deletpanier(iditem,idpanier,1).subscribe({
      next:(result)=>{this.tostrservice.success( 'supprimer   avec success');
      },
      error:(err)=>{this.tostrservice.success('error','error');},
      complete:()=>{this.ngOnInit()}
    })
}

makePayment(amount: any) {
  const paymentHandler = (<any>window).StripeCheckout.configure({
    key: this.stripeAPIKey,
    locale: 'auto',
    token: function (stripeToken: any) {
      console.log(stripeToken);
      alert('Stripe token generated!');
    },
  });
  paymentHandler.open({
    name: 'ItSolutionStuff.com',
    description: '3 widgets',
    amount: amount * 100,
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
