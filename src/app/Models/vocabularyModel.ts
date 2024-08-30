export class VocabularyModel {
        
                pk_QuestionStandard_Id : number;
                userId : number;
                english :string;
                phonetic:string;
                meaningEnglish:string;
                meaningVietNam:string;
                note :string;
                audio :string;
                position : number = 0;
                constructor(){
                    this.pk_QuestionStandard_Id = 0;
                    this.userId = 0;
                    this.english = '';
                    this.phonetic = '';
                    this.meaningEnglish = '';
                    this.meaningVietNam = '';
                    this.note = '';
                    this.audio = '';
                }
  }