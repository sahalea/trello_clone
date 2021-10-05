import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${(props) =>
    props.className === 'btn-primary'
      ? '#0067a3'
      : props.className === 'btn-danger'
      ? '#ce4a4a'
      : props.className === 'btn-success'
      ? '#2dbf2e'
      : '#eee'};
  width: fit-content;
  padding: 10px 20px;
  text-transform: capitalize;
  color: #fff;
  font-size: 14px;
`;

interface ButtonProps {
  text: string;
  type?: 'primary' | 'default' | 'danger' | 'success';
  onClick?: () => void;
}

const AppButton = ({ text, type, onClick }: ButtonProps) => {
  return (
    <Btn
      className={
        type === 'primary'
          ? 'btn-primary'
          : type === 'danger'
          ? 'btn-danger'
          : type === 'success'
          ? 'btn-success'
          : 'btn-default'
      }
      onClick={onClick}
    >
      {text}
    </Btn>
  );
};

export default AppButton;
