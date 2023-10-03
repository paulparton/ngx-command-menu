import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AnyCmdMenuItem,
  CmdMenuItem,
  NgxCommandMenuModule,
} from 'ngx-command-menu';

@Component({
  standalone: true,
  imports: [RouterModule, NgxCommandMenuModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-command-menu-demo';

  public commandMenuItems: AnyCmdMenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      type: 'link',
      url: '',
    },
    {
      id: 'about',
      label: 'about',
      type: 'link',
      url: 'about',
    },
    {
      id: 'action',
      label: 'Action',
      type: 'action',
      action: () => {
        console.log(`Action`);
      },
      meta: {},
    },
  ];
}
