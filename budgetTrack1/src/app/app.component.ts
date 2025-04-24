import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { signIn, signUp, signOut, getCurrentUser } from 'aws-amplify/auth';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';



@Component({
  selector: 'app-root',
  
  imports:[FormsModule, AmplifyAuthenticatorModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  loginin()
  {
    this.router.navigate(['dashboard']);
  }
  expense()
  {
    this.router.navigate(['addExpense']);
  }
}
