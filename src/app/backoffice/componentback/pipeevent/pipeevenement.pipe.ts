import { Pipe, PipeTransform } from '@angular/core';
import {evenement} from "../../../model/evenement";

@Pipe({
  name: 'pipeevenement'
})
export class PipeevenementPipe implements PipeTransform {

  transform(/*items: evenement[], searchtext:string*/): any {
   /*if(!items){
     return [];
   }
   if (!searchtext){
     return items;
   }
   searchtext=searchtext.toLocaleLowerCase();
   return items.filter(it => {
     return it.titre.toLocaleLowerCase().includes(searchtext);
   });*/
  }

}
