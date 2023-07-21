import React from 'react';
import { KanbanBoard } from './Board.styled';

type TBoard = {
  children?: React.ReactNode;
}

export const Board: React.FC<TBoard> = ({ children }) => {
  return (
    <KanbanBoard>
      {children}
    </KanbanBoard>
  );
}