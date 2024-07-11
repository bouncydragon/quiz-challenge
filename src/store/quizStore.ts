import { create } from 'zustand';

type Answer = {
  answer_a: string | null;
  answer_b: string | null;
  answer_c: string | null;
  answer_d: string | null;
  answer_e: string | null;
  answer_f: string | null;
};

type CorrectAnswers = {
  answer_a_correct: string;
  answer_b_correct: string;
  answer_c_correct: string;
  answer_d_correct: string;
  answer_e_correct: string;
  answer_f_correct: string;
};

type Tag = {
  name: string;
};

type Question = {
  id: number;
  question: string;
  description: string | null;
  answers: Answer;
  multiple_correct_answers: string;
  correct_answers: CorrectAnswers;
  correct_answer: string | null;
  explanation: string | null;
  tip: string | null;
  tags: Tag[];
  category: string;
  difficulty: string;
};

type QuizState = {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
};

export const useQuizStore = create<QuizState>((set) => ({
  questions: [],
  setQuestions: (questions) => set({ questions }),
}));
