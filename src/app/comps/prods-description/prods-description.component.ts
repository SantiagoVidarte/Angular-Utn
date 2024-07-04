import { Component, inject } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Iproducts } from '../../Iproducts';
import { ActivatedRoute } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormComponent } from '../form/form.component';
@Component({
  selector: 'app-prods-description',
  standalone: true,
  imports: [ReactiveFormsModule, FormComponent],
  template: `
    @if (!products) {
    <p>is loading...</p>
    }@else {

    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            [src]="products.image"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              {{ products.category }}
            </h2>
            <h2 class="text-sm title-font text-gray-500 tracking-widest"></h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              {{ products.title }}
            </h1>
            <p class="leading-relaxed">
              {{ products.description }}
            </p>
            <hr />
            <div class="flex p-2">
              <div class="title-font font-medium text-2xl text-gray-900">
                <span>$</span>{{ products.price }}
              </div>
              <button
                class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Button
              </button>
            </div>
            <!-- <div
              class="w-[full] mt-12 justify-center mx-auto  rounded-lg p-8 flex flex-col space-y-4 "
            >
              <h2 class="font-bold text-center text-xl">Contact Us</h2>
              <form
                [formGroup]="applyForm"
                (submit)="handleSubmit()"
                class="space-y-4"
              >
                <div>
                  <label class="block mb-1 text-gray-700" for="first-name"
                    >First Name</label
                  >
                  <input
                    class="w-full p-2 border border-gray-300 rounded"
                    type="text"
                    id="first-name"
                    formControlName="firstName"
                  />
                  <span
                    class="text-red-500 text-sm"
                    [hidden]="firstName.valid || firstName.untouched"
                  >
                    First name is required
                  </span>
                </div>

                <div>
                  <label class="block mb-1 text-gray-700" for="lastName"
                    >Last Name</label
                  >
                  <input
                    class="w-full p-2 border border-gray-300 rounded"
                    type="text"
                    id="lastName"
                    formControlName="lastName"
                  />
                  <span
                    class="text-red-500 text-sm"
                    [hidden]="lastName.valid || lastName.untouched"
                  >
                    Last name is required
                  </span>
                </div>
                <div>
                  <label class="block mb-1 text-gray-700" for="email"
                    >Email</label
                  >
                  <input
                    class="w-full p-2 border border-gray-300 rounded"
                    type="text"
                    id="email"
                    formControlName="email"
                  />
                  <span
                    class="text-red-500 text-sm"
                    [hidden]="email.valid || email.untouched"
                  >
                    @if(email.errors?.['required']){ Email is requiered
                    }@else{Must be invalid email}
                  </span>
                </div>
                <button
                  type="submit"
                  class="w-full p-2 bg-blue-500 text-white rounded"
                  [disabled]="applyForm.invalid"
                >
                  Submit
                </button>
              </form>
            </div> -->
            <app-form></app-form>
          </div>
        </div>
      </div>

      <div class="flex flex-col bg-slate-400"></div>
    </section>
    }
  `,
})
export class ProdsDescriptionComponent {
  applyForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]),
  });

  route: ActivatedRoute = inject(ActivatedRoute);
  prodService = inject(ProductsService);
  products: Iproducts | undefined;
  constructor() {
    const producstId = Number(this.route.snapshot.params['id']);
    this.prodService.getProductsById(producstId).then((products) => {
      this.products = products;
    });
  }
  //metodo getter, del formulario tal te doy el campo x
  get firstName() {
    return this.applyForm.get('firstName') as FormControl;
  }
  get lastName() {
    return this.applyForm.get('lastName') as FormControl;
  }
  get email() {
    return this.applyForm.get('email') as FormControl;
  }
  handleSubmit() {
   if (this.applyForm.invalid)return;
  }
}
