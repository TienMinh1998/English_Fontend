
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModel } from '../../Models/LoginModel';
import { AppSetting } from '../../appsetting';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: '../../../css/login/style.css'
})
export class LoginComponent {
  loginObj: LoginModel;
  // login form là 1 form group 
  // dùng form group này dùng như thế nào? 
  // khai báo formGroup : 
  loginForm: FormGroup = new FormGroup(
    {
      userName: new FormControl<string>(""),
      password: new FormControl<string>("")
    }
  )


  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new LoginModel();
  }
  onSupmit() {
    console.log(this.loginForm.value)
  }

}
