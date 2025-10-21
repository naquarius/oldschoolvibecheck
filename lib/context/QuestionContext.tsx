'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

interface QuestionContextType {
  question: string;
  setQuestion: (value: string) => void;
}

const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined
);

export const QuestionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [question, setQuestion] = useState('');

  return (
    <QuestionContext.Provider value={{ question, setQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error('useQuestion must be used within a QuestionProvider');
  }
  return context;
};
