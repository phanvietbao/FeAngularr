import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  full_name: string = '';
  phone: string = '';
  address: string = '';
  gender: string = '';
  birthday: string = '';
  password: string = '';
  password_confirmation: string = '';

  constructor(private http: HttpClient, private userService: AuthService, private router : Router) { }
  onSubmit() {
    this.userService.register(this.username,
      this.email,
      this.full_name,
      this.phone,
      this.address,
      this.gender,
      this.birthday,
      this.password,
      this.password_confirmation).subscribe(data => { console.log(data) }),
      this.router.navigate(['/login']);
  }
  // register(): Observable<any> {
  //   const url = 'http://localhost:9000/api#/users/UsersController_register';
  //   const body = {
  //     username: this.username,
  //     email: this.email,
  //     full_name: this.full_name,
  //     phone: this.phone,
  //     address: this.address,
  //     gender: this.gender,
  //     birthday: this.birthday,
  //     password: this.password,
  //     password_confirmation: this.password_confirmation
  //   };
  //   return this.http.post(url, body);
  // }
}
