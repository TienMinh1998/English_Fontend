export  class EnglishSearchModel{
    word: string = '';
    camVocabulary : CamVocabulary  = new CamVocabulary
}

export  class CamVocabulary{
    daftWord: string = '';
    audio : string = '';
    phonetic: string = ''; 
    wordType : string = '';
}