import { Component, inject } from '@angular/core';
import { ProductsService } from '../../products.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
   <div
              class="w-[full] mt-12 justify-center mx-auto  rounded-lg p-8 flex flex-col space-y-4 "
            >
              <h3 class="font-bold text-center text-xl">Contact us</h3>

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
            </div>
  `,
})
export class FormComponent {
  prodService = inject(ProductsService);
  applyForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    ]),
  });
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
     this.prodService.submitApplication(
      this.applyForm.value.firstName??'',
      this.applyForm.value.lastName??'',
      this.applyForm.value.email??''
     );
    }
  }
  

