import { Component, signal } from '@angular/core';

@Component({
  selector: 'javazone-auth',
  template: "<p>javazone-auth</p>",
  standalone: true,
})
export class AuthComponent {
  protected readonly title = signal('auth');
}
