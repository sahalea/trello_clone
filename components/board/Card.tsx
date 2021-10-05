import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Card = styled.div`
  min-height: 80px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #eee;
  margin: 15px 0px;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  .card-body {
    flex: 1;
  }
  h2 {
    font-size: 14px;
    font-weight: 500;
    margin-right: 10px;
  }
  img {
    cursor: pointer;
    fill: red;
    height: 25px ​ !important;
    width: 25px !important;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
`;

interface CardProps {
  onDelete?: (value: any) => void;
  data?: any;
}

const KanbanCard = ({ onDelete, data }: CardProps) => {
  const router = useRouter();
  return (
    <Card>
      <div
        className="card-body"
        onClick={() => router.push(`/addTodo/${data.id}`)}
      >
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>

      <Image
        src="/close-outline.svg"
        alt="close icon"
        width={40}
        height={40}
        onClick={() => {
          if (onDelete) onDelete(data.id);
        }}
      />
    </Card>
  );
};

export default KanbanCard;
