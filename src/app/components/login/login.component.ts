import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  gridTemplateColumns = '45% 55%';
  showDiv3And4 = false;
 
  movimientodrecha() {
    this.showDiv3And4 = !this.showDiv3And4;
    this.gridTemplateColumns = this.gridTemplateColumns === '45% 55%' ? '55% 45%' : '45% 55%';
  }

}
