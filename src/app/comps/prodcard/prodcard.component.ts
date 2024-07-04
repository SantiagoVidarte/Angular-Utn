import { Component, Input  } from '@angular/core';
import { Iproducts } from '../../Iproducts';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-prodcard',
  standalone: true,
  imports: [RouterModule],
  template: `
 <section class="flex " [routerLink]="['/description/',productList.id]"> 
   <div class="bg-slate-100 p-6 rounded-lg max-w-[300px]">
     <img class="h-40  w-full object-cover object-center mb-6 rounded-lg" [src]="productList.image" alt="Una imagen">
     <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{{productList.category}}</h3>
     <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{{productList.title.substring(0, 11)}}..</h2>
     <p class="leading-relaxed text-base">{{productList.description.substring(0,75)}}... <br>
     <strong>Learn more</strong>
    </p>
    </div>
  </section>
  `,
  styles: ``,
})
export class ProdcardComponent {
  @Input() productList!: Iproducts;
  //  tengo que poner el ! para que typescript no piense que mi valor puede ser nulo
}
