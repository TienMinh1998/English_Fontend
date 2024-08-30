import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppSetting } from '../../appsetting';
import { AddVocabolaryModel } from '../../Models/AddVocabularyModel';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-add-vocabulary',
  standalone: true,
  imports: [FormsModule,MatCardModule],
  templateUrl: './add-vocabulary.component.html',
  styleUrl: './add-vocabulary.component.css'
})
export class AddVocabularyComponent {
  // my models for adding
  addModel : AddVocabolaryModel;

  constructor(private http:HttpClient, private router:Router){
    this.addModel = new AddVocabolaryModel();
  }

  // add question for Admin
  AddQuestionForAdmin()  {
    console.log('func getVocabulary running')
    const token =  localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`)
    const request:any = {
      "english": this.addModel.english,
      "phonetic": this.addModel.phonetic,
      "meaningEnglish": this.addModel.meaningEnglish,
      "meaningVietNam": this.addModel.meaningVietNam,
      "note" :this.addModel.note
    }
console.log(request);
   const res: any = this.http.post(`${AppSetting.apiUrl}/api/QuestionStandard/AddStandardQuestion`,request,{headers}).subscribe((res:any)=>{
    this.router.navigate(['/home']);
    })
  }
   // Go back to home 
    goBack(){
      this.router.navigate(['/home']);
    }
  }



