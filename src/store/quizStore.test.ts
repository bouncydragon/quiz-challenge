import { renderHook, act } from '@testing-library/react';
import { useQuizStore } from './quizStore';
import { mockData } from './mockData';

describe('useQuizStore', () => {
  it('should set questions correctly', () => {
    const { result } = renderHook(() => useQuizStore());
    act(() => {
      result.current.setQuestions(mockData);
    });

    expect(result.current.questions[0].question).toEqual(mockData[0].question);
  });

  it('should set answer correctly', () => {
    const { result } = renderHook(() => useQuizStore());

    act(() => {
      result.current.setAnswer(0, 'answer_b');
    });

    expect(result.current.answers[0]).toEqual(['answer_b']);
  });

  it('should calculate total correct answers', () => {
    const { result } = renderHook(() => useQuizStore());

    act(() => {
      result.current.setQuestions(mockData);
      result.current.setAnswer(0, 'answer_c');
      result.current.calculateTotalCorrectAnswers();
    });

    expect(result.current.totalCorrectAnswers).toBe(1);
  });

  it('should change add more answers and remove existing answer', () => {
    const { result } = renderHook(() => useQuizStore());

    act(() => {
      result.current.setQuestions(mockData);
      result.current.setAnswer(1, 'answer_a');
      result.current.setAnswer(1, 'answer_a');
      result.current.setAnswer(1, 'answer_c');
    });
    expect(result.current.answers[1]).toEqual(['answer_c']);
  });
});
