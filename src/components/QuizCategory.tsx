import React from 'react';
import QuizCard from './QuizCard';

interface QuizItem {
  id: string;
  title: string;
  category: string;
  thumbnailUrl?: string;
}

interface QuizCategoryProps {
  title: string;
  quizzes: QuizItem[];
}

export function QuizCategory({ title, quizzes }: QuizCategoryProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-[#1F2185] mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            category={quiz.category}
            title={quiz.title}
            thumbnailUrl={quiz.thumbnailUrl}
            className="flex-shrink-0"
          />
        ))}
      </div>
    </section>
  );
}