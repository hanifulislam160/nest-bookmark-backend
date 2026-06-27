/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I want to sign up' };
  }
  signin() {
    return { msg: 'I want to login' };
  }
}
