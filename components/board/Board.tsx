import React from 'react';
import styled from 'styled-components';
import KanbanCard from './Card';
import AppButton from '../../components/Button';
import router from 'next/router';

const Board = styled.div`
  background-color: #e4e4e4;
  margin-right: 15px;
  height: 100%;
  min-width: 300px;
  max-width: 300px;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 10px 20px;
  .board-header {
    font-size: 18px;
    margin: 0;
  }
  button {
    margin-top: 10px;
  }
`;

interface BoardProps {
  onDeleteCard?: (value: any) => void;
  tasks?: any[];
  title: string;
}

const KanbanBoard = ({ onDeleteCard, tasks, title }: BoardProps) => {
  return (
    <Board>
      <h1 className="board-header">{title}</h1>
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task, idx) => {
          return <KanbanCard key={idx} onDelete={onDeleteCard} data={task} />;
        })}
      <AppButton
        text="Add card"
        type="primary"
        onClick={() => router.push('/addTodo/0')}
      />
    </Board>
  );
};

export default KanbanBoard;
