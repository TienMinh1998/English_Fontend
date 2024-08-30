
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../Models/LoginModel';
import { AppSetting } from '../../appsetting';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  loginObj : LoginModel;
  constructor(private http: HttpClient, private router: Router){
    this.loginObj = new LoginModel();
  }
onLogin()
    {
    const server = AppSetting.apiUrl;
     this.http.post(`${server}/api/Login`,this.loginObj).subscribe((res:any)=>{
      // get token from API :
      console.log(res.data.token)
      const mytoken:string = res.data.token;
    
      if(res.status==200)
      {
        console.log("go to home");
        this.router.navigate(['/home']);
      }
      // save token to localstore
      localStorage.setItem('token', mytoken);
     })
    }
  getCustomer() {
    const token =  localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`)
   
    this.http.get('https://jsonplaceholder.typicode.com/posts',{headers}).subscribe((s)=>{
      console.log('OK da get token');
    })
  }
}
