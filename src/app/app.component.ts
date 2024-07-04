import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './comps/header/header.component';
import { ProdsmainComponent } from './comps/prodsmain/prodsmain.component';
import { ProdsDescriptionComponent } from './comps/prods-description/prods-description.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProdsmainComponent, ProdsDescriptionComponent, ],
  template: `
  <app-header />
<router-outlet></router-outlet>
`,
  styleUrl: './app.component.css',
})
export class AppComponent {}
