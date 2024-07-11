import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

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
  answers: { [key: number]: string[] };
  setQuestions: (questions: Question[]) => void;
  setAnswer: (questionIndex: number, answer: string) => void;
};

export const useQuizStore = create<QuizState>((set) => ({
  questions: [],
  answers: {},
  setQuestions: (questions) => set({ questions }),
  setAnswer: (questionIndex, answer) =>
    set((state) => {
      const currentAnswers = state.answers[questionIndex] || [];
      const question = state.questions[questionIndex];
      let newAnswers;

      if (question.multiple_correct_answers === 'false') {
        newAnswers = [answer];
      } else {
        newAnswers = currentAnswers.includes(answer)
          ? currentAnswers.filter((a) => a !== answer)
          : [...currentAnswers, answer];
      }
      return {
        answers: { ...state.answers, [questionIndex]: newAnswers },
      };
    }),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useQuizStore);
}
