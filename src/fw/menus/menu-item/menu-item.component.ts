import {
  Component, Input, HostBinding, HostListener,
  ElementRef, Renderer, OnInit
} from '@angular/core';
import { MenuItem, MenuService } from 'src/fw/services/menu.service';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations: [
    trigger('visibilityChanged', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(250, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(100, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  @Input() item: MenuItem;

  @HostBinding('class.parent-is-popup')
  @Input() parentIsPopup = true;

  isActiveRoute = false;
  mouseInItem = false;
  mouseInPopup = false;
  popupLeft = 0;
  popupTop = 18;


  constructor(
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer,
    private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.checkActiveRoute(this.router.url)

    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        this.checkActiveRoute(evt.url);
      }
    })

  }

  checkActiveRoute(route: string) {
    this.isActiveRoute = (route == '/' + this.item.route);
  }

  @HostListener('click', ['$event'])
  onclick(event): void {
    event.stopPropagation();
    if (this.item.submenu) {
      if (this.menuService.isVertical) {
        this.mouseInPopup = !this.mouseInPopup;
      }
    } else if (this.item.route) {
      let newEvent = new MouseEvent('mouseleave', { bubbles: true });
      this.renderer.invokeElementMethod(
        this.el.nativeElement, "dispatchEvent", [newEvent]
      );
      this.router.navigate(['/' + this.item.route]);
    }
  }


  onPopupMouseEnter(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInPopup = true;
    }
  }

  onPopupMouseLeave(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInPopup = false;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event): void {
    if (!this.menuService.isVertical) {
      this.mouseInItem = false;
    }
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (!this.menuService.isVertical) {
      if (this.item.submenu) {
        this.mouseInItem = true;
        if (this.parentIsPopup) {
          this.popupLeft = 160;
          this.popupTop = 0;
        }
      }
    }
  }


}
