export const removeNullAndFalseEntities = (question: any) => {
  const filteredOptions = Object.fromEntries(
    Object.entries(question.answers).filter(([, value]) => value !== null)
  );
  return {
    ...question,
    answers: filteredOptions,
  };
};
