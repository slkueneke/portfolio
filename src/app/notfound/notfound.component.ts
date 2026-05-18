import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="flexWrapper">
      <h2 class="font-bubble">404</h2>
      <p>Hey! What are you doing <em>here</em>?</p>
      <p>Let's get you <a routerLink="/">home</a>.</p>
    </div>
  `,
  styles: `
    .flexWrapper {
      display: block;
    }

    p,
    h2 {
      text-align: center;
      font-size: 1.5em;
    }

    h2 {
      font-size:5em;
    }

    a {
      text-decoration: underline;
    }

    .font-bubble {
      font-family: 'Bungee Shade', sans-serif;
    }
  `,
})
export class NotfoundComponent {}
