import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandMenuComponent } from './command-menu/command-menu.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CommandMenuComponent],
  exports: [CommandMenuComponent],
})
export class NgxCommandMenuModule {}
