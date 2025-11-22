import { Component, ElementRef, HostListener, Renderer2, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'shell-app',
  templateUrl: './shell.component.html',
  standalone: true,
  imports: [RouterOutlet, NgxSpinnerModule],
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  constructor(private _Renderer2: Renderer2) { }

  protected readonly title = signal('shell');

  @ViewChild('goUp', { static: false }) goUp!: ElementRef;

  @HostListener('window:scroll')

  onScroll(): void {
    if (this.goUp) {
      if (window.scrollY > 300) {
        this._Renderer2.removeClass(this.goUp.nativeElement, 'hide');
      } else {
        this._Renderer2.addClass(this.goUp.nativeElement, 'hide');
      }
    }
  }
  goToUp(): void {
    scrollTo(0, 0);
  }
}
