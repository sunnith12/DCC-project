import { Component } from '@angular/core';
import {FormsModule } from '@angular/forms'
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  constructor(private router: Router){}

  ngOninit()
  {

  }

  goToAddExpense()
  {
    this.router.navigate(['addExpense']);
  }

  goToSetGoal()
  {
    this.router.navigate(['setGoal']); 
  }

}


