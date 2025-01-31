import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  monthlyInvestment: number = 0;
  annualReturnRate: number = 0;
  investmentDuration: number = 0;
  maturityAmount: number | null = null;

  calculateSIP(): void {
    const n = this.investmentDuration * 12; // Total number of months
    const r = this.annualReturnRate / 12 / 100; // Monthly interest rate

    // SIP formula: M = P × [(1 + r)^n - 1] × (1 + r) / r
    if (r > 0) {
      this.maturityAmount = this.monthlyInvestment * ((Math.pow(1 + r, n) - 1) * (1 + r)) / r;
    } else {
      this.maturityAmount = this.monthlyInvestment * n; // No interest case
    }
  }
}
