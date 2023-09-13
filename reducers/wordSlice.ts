import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { DictionaryWord } from "@/types";
import { RootState } from "./store";

const initialState: DictionaryWord = {
  word: "",
  meaningList: [],
  phonetic: {
    text: "",
    audio: "",
  },

};

export const getWord = createAsyncThunk(
  "word/getWord",
  async (word: string) => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${
        word
      }`
    );
    return await response.json();
  }
);

export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getWord.fulfilled, (state, {payload}) => {
      state.meaningList = payload[0].meanings;
      state.word = payload[0].word;
    });
  },
});


export default wordSlice.reducer;
export const wordSelector = (state: RootState)=> state.wordData;
