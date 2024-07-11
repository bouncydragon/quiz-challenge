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
  correct_answer: string | string[];
  explanation: string | null;
  tip: string | null;
  tags: Tag[];
  category: string;
  difficulty: string;
};

type QuizState = {
  questions: Question[];
  answers: { [key: number]: string[] };
  totalCorrectAnswers: number;
  setQuestions: (questions: Question[]) => void;
  setAnswer: (questionIndex: number, answer: string) => void;
  calculateTotalCorrectAnswers: () => void;
};

export const useQuizStore = create<QuizState>((set, get) => ({
  questions: [],
  answers: {},
  totalCorrectAnswers: 0,
  setQuestions: (questions: Question[]) => set({ questions }),
  setAnswer: (questionIndex: number, answer: string) =>
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
  calculateTotalCorrectAnswers: () => {
    const { questions, answers } = get();
    let totalCorrect = 0;

    questions.forEach((question, index) => {
      const correctAnswers = Object.entries(question.correct_answer)
        .filter(([, value]) => value === 'true')
        .map(([key]) => key.replace('_correct', ''));

      const userAnswers = answers[index] || [];

      if (
        correctAnswers.length === userAnswers.length &&
        correctAnswers.every((answer) => userAnswers.includes(answer))
      ) {
        totalCorrect += 1;
      }
    });
    set({ totalCorrectAnswers: totalCorrect });
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useQuizStore);
}
