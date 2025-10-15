import { inject } from '@angular/core';
import { CanMatchFn, RedirectCommand, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanMatchFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/login'));
};
