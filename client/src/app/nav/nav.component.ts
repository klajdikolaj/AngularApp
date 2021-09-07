import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_modals/user';
import { AccountService } from '../_services/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'nav-app',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {};

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }


  login(){
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members');
      }, error => {
      console.log(error);
      }
    )
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');

  }

}
