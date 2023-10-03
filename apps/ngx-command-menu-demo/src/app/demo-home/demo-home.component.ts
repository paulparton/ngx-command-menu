import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-demo-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="spotlight-area content-area">
      <h1>Angular Command Menu</h1>
      <h2>Press CMD/WIN + K</h2>
      <p>Something something something, something else here about the menu!</p>
    </div>
  `,
  styles: [`

  `],
})
export class DemoHomeComponent {}
