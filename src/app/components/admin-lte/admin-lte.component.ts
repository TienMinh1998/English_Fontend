import { Component, OnInit } from '@angular/core';
import { AppSetting } from '../../appsetting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Console } from 'console';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-lte',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-lte.component.html',
  styleUrl: './admin-lte.component.css'
})


export class AdminLteComponent implements OnInit  {

  numOfVocabylary : number = 0;
  url : string = '';
  word: string = '';
  constructor(private http:HttpClient, private router:Router) {

  }
  ngOnInit(): void {
    this.getAdminInfomation();
  }

  private getAdminInfomation()
  {
    const server = AppSetting.apiUrl;
    const token =  localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`)
    this.http.get(`${server}/api/QuestionStandard/admin_infomation`,{headers}).subscribe((res:any)=>{
     if(res.status==200)
     {
      this.numOfVocabylary =  Number(res.data);
     }
    })
  }

  navigatorToPage(){
    this.router.navigate(['/home']);
  }

  searchVocap(){
    if (this.word=='') {
      
    }
    this.url = `https://dictionary.cambridge.org/dictionary/english/${this.word}`
    window.open(this.url, '_blank');
  }

  clearInfomation(event: FocusEvent){
    const inputElement = event.target as HTMLInputElement;
    inputElement.style.backgroundColor = 'yellow'; // Thay đổi màu nền khi focus
    this.word = '';
  }
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value) {
      inputElement.style.backgroundColor = 'lightgreen'; // Đổi màu nền khi có text nhập vào
    } else {
      inputElement.style.backgroundColor = 'yellow'; // Đổi lại màu nếu ô input trống
    }
  }
}
