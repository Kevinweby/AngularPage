import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <h1>CursoAngular</h1>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';
}
