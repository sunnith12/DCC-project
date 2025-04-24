import { Injectable } from '@angular/core';
import { signIn, signUp, confirmSignUp, signOut, getCurrentUser } from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  async signUp(username: string, password: string, email: string) {
    return await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
        },
      },
    });
  }

  async confirmSignUp(username: string, code: string) {
    return await confirmSignUp({ username, confirmationCode: code });
  }

  async signIn(username: string, password: string) {
    return await signIn({ username, password });
  }

  async signOut() {
    return await signOut();
  }

  async getCurrentUser() {
    return await getCurrentUser();
  }
}
