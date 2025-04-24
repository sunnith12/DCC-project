import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addexpense',
  imports: [FormsModule],
  templateUrl: './addexpense.component.html',
  styleUrl: './addexpense.component.css'
})
export class AddexpenseComponent {

  amount=100;
  category='rent';

  ngOninit()
  {

  }

  submitExpense()
  {
    
  }

}
