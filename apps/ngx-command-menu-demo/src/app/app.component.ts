import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxCommandMenuModule } from 'ngx-command-menu';

@Component({
  standalone: true,
  imports: [RouterModule, NgxCommandMenuModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-command-menu-demo';
}
