import { Component, OnInit, Input } from '@angular/core';
import { MenuItem, MenuService } from 'src/fw/services/menu.service';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() item: MenuItem;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
