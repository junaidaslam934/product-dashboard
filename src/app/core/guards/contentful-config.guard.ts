import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulConfigGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const { spaceId, accessToken } = environment.contentful;
    
    if (!spaceId || !accessToken || 
        spaceId === 'YOUR_SPACE_ID' || 
        accessToken === 'YOUR_ACCESS_TOKEN') {
      console.error('Contentful credentials not configured. Please update environment.ts');
      // In a real app, you might redirect to a setup page
      // For now, we'll allow navigation but log the error
      return true;
    }
    
    return true;
  }
}
