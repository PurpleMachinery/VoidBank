import { AbstractComponent } from './../../shared/components/abstract-component.component';
import { Component } from '@angular/core';

@Component({
  selector: 'Dashboard-router',
  templateUrl: './dashboard-router.component.html'
})
export class DashboardRouterComponent extends AbstractComponent {
  currentPage: number = 0;

  constructor() { 
    super();
  }

  public changeCurrentPage(newPage: number): void{
    this.currentPage = newPage;
  }
}