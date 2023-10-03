import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnyCmdMenuItem, NgxCommandMenuModule } from 'ngx-command-menu';

@Component({
  selector: 'org-item-generator',
  standalone: true,
  imports: [CommonModule, NgxCommandMenuModule],
  templateUrl: './item-generator.component.html',
  styleUrls: ['./item-generator.component.scss'],
})
export class ItemGeneratorComponent {

  public commandMenuItems: AnyCmdMenuItem[] = [];
}
