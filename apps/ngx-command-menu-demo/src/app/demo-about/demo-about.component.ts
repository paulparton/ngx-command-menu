import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-demo-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Angular Command Menu</h1>
    <div class="spotlight-area">
      <div class="content-area">
        <h2>What is it?</h2>
        <p>
          Something something something, something else here about the menu!
        </p>
      </div>
      <div class="about-grid">
        <div class="content-area"></div>
        <div class="content-area"></div>
        <div class="content-area"></div>
      </div>
    </div>
  `,
  styles: [
    `
      .about-grid {
        display: flex;
        flex-direction: 'row';
        align-items: 'space-between';
        gap: 16px;
        margin-top: 16px;
      }
      .about-grid .content-area {
        height: 130px;
        flex: 1;
      }
      h1 {
        display: block;
        text-align: center;
      }
      .spotlight-area {
        margin-top: 0;
      }
    `,
  ],
})
export class DemoAboutComponent {}
