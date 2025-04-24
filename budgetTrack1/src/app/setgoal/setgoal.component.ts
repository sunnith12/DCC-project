import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-setgoal',
  imports: [FormsModule],
  templateUrl: './setgoal.component.html',
  styleUrl: './setgoal.component.css'
})
export class SetgoalComponent {


  amount=100;
  deadline='';

  ngOninit()
  {

  }

  submitGoal()
  {

  }

}
