export const removeNullAndFalseEntities = (question: any) => {
  const filteredOptions = Object.fromEntries(
    Object.entries(question.answers).filter(([, value]) => value !== null)
  );

  const filteredCorrectAnswers = Object.fromEntries(
    Object.entries(question.correct_answers).filter(
      ([, value]) => value !== 'false'
    )
  );
  return {
    ...question,
    answers: filteredOptions,
    correct_answer: filteredCorrectAnswers,
  };
};
