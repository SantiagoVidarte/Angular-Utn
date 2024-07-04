import { Component, inject } from '@angular/core';
import { ProdcardComponent } from '../prodcard/prodcard.component';
import { ProductsService } from '../../products.service';
import { Iproducts } from '../../Iproducts';

@Component({
  selector: 'app-prodsmain',
  standalone: true,
  imports: [ProdcardComponent],
  template: `
    <section class="flex flex-col px-4 text-gray-600 body-font  ">
      <form action="button" class="flex max-w-[300px] ">
        <input
          type="search"
          id="filter"
          placeholder="Name"
          #filter
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mr-4 dark:bg-gray-700  dark:text-white "
          (keyup.enter)="filteredProducts(filter.value)"
        />

        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          (click)="filteredProducts(filter.value)"
        >
          Search
        </button>
      </form>
      @if (!filteredProds) {
      <p>is loading...</p>
      }@else{

        <section class="flex flex-wrap justify-center p-8 gap-4 ">
          @for (prods of filteredProds; track prods.id) {
            <app-prodcard [productList]="prods" />
          }
        </section>
      }
      </section>
      `,
      styles: ``,
    })
    export class ProdsmainComponent {
  prodService: ProductsService = inject(ProductsService);
  products: Iproducts[] = [];
  filteredProds: Iproducts[] = [];

  constructor() {
    this.prodService.getProducts().then((products: Iproducts[]) => {
      this.products = products;
      this.filteredProds = products;
    });
  }

  filteredProducts(text: string) {
    if (!text) {
      this.filteredProds = this.products;
    }
    this.filteredProds = this.products.filter((prods) =>
      prods?.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
  }
}
