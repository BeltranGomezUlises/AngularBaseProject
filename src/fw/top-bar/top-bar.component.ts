import { Component, OnInit } from '@angular/core';
import { FrameworkConfigService } from '../services/framework-config.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private frameworkConfigService: FrameworkConfigService,
    private userService: UserService) { }

  ngOnInit() {
  }

  signOut(){
    this.userService.signout();
  }

}
