import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

export interface CmdMenuItem {
  id: string;
  type: 'link' | 'action';
  label: string;
}

export interface CmdMenuLink extends CmdMenuItem {
  type: 'link';
  url: string;
}

export interface CmdMenuAction<T = unknown> extends CmdMenuItem {
  type: 'action';
  action: () => void;
  meta?: T;
}

export type AnyCmdMenuItem = CmdMenuLink | CmdMenuAction;

export type MenuState = 'opened' | 'closed';

@Component({
  selector: 'cmd-command-menu',
  templateUrl: './command-menu.component.html',
  styleUrls: ['./command-menu.component.scss'],
  animations: [
    trigger('onOff', [
      transition(':enter', [style({
        opacity: 0,
        transform: 'translateY(-100%)'
      }),
      animate(400)
    ])
    ])
 ]
})
export class CommandMenuComponent {
  @ViewChild('search', { static: false })
  set input(element: ElementRef<HTMLInputElement>) {
    console.log(`input element`, element);
    if (element) {
      element.nativeElement.focus();
    }
  }

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
  @Input() public hotkeys: string[][] = [];

  /**
   * Items currently displayed in the menu
   *
   * Menu item should optionally be able to include predefined commands, e.g
   * there could be commands that change how the menu is displayed "Show menu as list" / "Show menu as grid"
   *
   */
  @Input() public menuItems: CmdMenuItem[] = [];

  /**
   * Show a loading spinner
   */
  @Input() public loading = false;

  /**
   * Debounce for emitting search requests
   */
  @Input() public searchDebounce = 500;

  @Input() public static = false;

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
