/* 
Meaning
MeaningList




*/
export type DictionaryWord = {
    word: string;
    meaningList: Meaning[];
    phonetic: {
        text: string,
        audio: string
    }
}

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
};

type Definition = {
  definition: string;
  example: string;
  synonyms?: string[];
  antonyms?: string[];
};
