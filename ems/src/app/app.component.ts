import { Component, OnInit} from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Hospital Management System';

  private roles: string[] = [];
  isLoggedIn = false;
  showCreateDoc = false;
  showViewDoc = false;
  showViewAllApps = false;
  showCreateApps = false;

  username!: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showCreateDoc = this.roles.includes('ROLE_ADMIN');
      this.showViewDoc = this.roles.includes('ROLE_ADMIN');
      this.showViewAllApps = this.roles.includes('ROLE_ADMIN');
      this.showCreateApps = this.roles.includes('ROLE_USER');

      this.username = user.username.toUpperCase();
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }
}
