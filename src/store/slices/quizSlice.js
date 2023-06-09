import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: {},
  selectedDifficultyLevel: {},
  activeQuestion: 0,
  result: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedDifficultyLevel: (state, action) => {
      state.selectedDifficultyLevel = action.payload;
    },
    setActiveQuestion: (state, action) => {
      state.activeQuestion = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const {
  setCategory,
  setSelectedDifficultyLevel,
  setActiveQuestion,
  setResult,
} = quizSlice.actions;

export default quizSlice.reducer;
