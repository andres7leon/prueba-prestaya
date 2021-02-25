import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  constructor(private router: Router,
              private ls: LocalStorageService) { }

  canActivate(): boolean {
    const customer = this.ls.getItem('user');
    if (customer?.id) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
