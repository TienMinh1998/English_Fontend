import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppSetting } from '../../appsetting';
import { VocabularyModel } from '../../Models/vocabularyModel';
import { NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Console } from 'node:console';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../services/StoreService';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'english', 'symbol', 'note', 'audio'];
  pageSize: number = 10;
  length = 50;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  searchText: String = '';
  dataSource: VocabularyModel[] = [
  ];


  constructor(private http: HttpClient, private router: Router, private sts: StorageService) {
  }
  ngOnInit(): void {
    console.log('func ngOninit running')
    this.getAllVocabulary();

  }


  async getAllVocabulary() {
    console.log('func getVocabulary running')
    const token = this.sts.getItem('token');
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    const request: any = {
      "searchKey": "",
      "pageNumber": this.pageIndex,
      "pageSize": this.pageSize,
      "isDesc": true
    }
    const res: any = await this.http.post(`${AppSetting.apiUrl}/api/QuestionStandard/AllQuestion`, request, { headers }).subscribe((res: any) => {
      this.dataSource = res.data.items
      let count = 0;
      this.dataSource.forEach((items) => {
        count = count + 1;
        items.position = count;
      })
    })
  }
  playAudio(audio_src: string) {
    let audio = new Audio();
    audio.src = audio_src;
    audio.load();
    audio.play();
  }

  OpenAddWindow() {
    this.router.navigate(['/add']);
  }

  handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    console.log(this.pageSize);
    console.log(this.pageIndex);
    this.getAllVocabulary();
  }
}
