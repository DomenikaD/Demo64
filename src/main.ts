import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { DemoComponent } from './app/components/demo/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DemoComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <h2> {{funcion}} </h2>

    

<ul>
    <li>
      <a target ="_blank" href="https://google.com">
      Google
      </a>
    </li>
<li>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
</li>
<app-demo></app-demo>

</ul>
  `,
})
export class App {
  name = 'Angular';
  funcion ='Estudiante';
  edad = 7;
}

bootstrapApplication(App);
