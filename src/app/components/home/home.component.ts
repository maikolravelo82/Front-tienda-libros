import { ChangeDetectionStrategy,Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare var Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent  {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigatepre(){
    this.router.navigate(['/preview']);
  }
}