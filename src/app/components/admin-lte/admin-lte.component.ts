import { Component, OnInit } from '@angular/core';
import { AppSetting } from '../../appsetting';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Console } from 'console';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EnglishSearchModel } from './SearchModelEnglsh';

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
  englishSearch: EnglishSearchModel = new EnglishSearchModel(); // Khởi tạo model
  
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

  // search từ mới 
  searchVocap(){
    if (this.word=='') {
      
    }
    const search_word = this.word;
    const server = 'http://localhost:5080';
    const headers = new HttpHeaders().set('x-api-key','537a4823-42c3-4960-8c75-5a5fa55a14ac')

    this.http.get(`${server}/Vocabulary/search?word=${search_word}`,{headers}).subscribe((res:any)=>
      {
        this.englishSearch = res;
        console.log(res);
    })
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
  playAudio() {
    var audio = new Audio();
    audio.src =  this.englishSearch.camVocabulary.audio;
    audio.load();
    audio.play();
  }
}
