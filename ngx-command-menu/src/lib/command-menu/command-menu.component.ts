import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

export interface CmdMenuItem {
  id: string;
  type: 'link' | 'action';
  label: string;
}

export type MenuState = 'opened' | 'closed';

@Component({
  selector: 'cmd-command-menu',
  templateUrl: './command-menu.component.html',
  styleUrls: ['./command-menu.component.scss'],
})
export class CommandMenuComponent {
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    console.log(`event`, event);

    if (event.key === 'Escape') {
      this.close();
    }

    if (event.metaKey && event.key === 'k') {
      this.open();
    }

  }


  /**
   * Keyboard combinations that trigger the menu to open.
   */
  @Input() public readonly hotkeys: string[][] = [];

  /**
   * Items currently displayed in the menu
   */
  @Input() public readonly menuItems: CmdMenuItem[] = [];

  /**
   * Show a loading spinner
   */
  @Input() public readonly loading = false;

  /**
   * Debounce for emitting search requests
   */
  @Input() public readonly searchDebounce = 500;

  /**
   * Emit search requests, this should result in the parent
   * component updating this.menuItems
   */
  @Output() public readonly search = new EventEmitter<string>();

  constructor(private readonly elementRef: ElementRef) {}
  public _state: 'opened' | 'closed' = 'closed';

  public set state(menuState: MenuState) {
    this._state = menuState;
  }

  public get state() {
    return this._state;
  }

  public open() {
    setTimeout(() => {
      this.state = 'opened';
    }, 100);
  }

  public close() {
    this.state = 'closed';
  }
}
