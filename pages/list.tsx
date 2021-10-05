import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';
import { useAppDispatch, useAppSelector } from './../app/hooks';
import { deleteTodo, selectTodos } from './../features/todoSlice';
import KanbanBoard from './../components/board/Board';

const Page = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  .kanban-board {
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-top: 25px;
    padding-left: 25px;
    height: 100%;
  }
`;

const Home: NextPage = () => {
  const [data, setData] = React.useState([]);
  const dispatch = useAppDispatch();
  const todo: any = useAppSelector(selectTodos);

  /**
   * Dispatch delete from store
   * @param id
   */
  const removeTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  React.useEffect(() => {
    if (todo.length) {
      setData(todo);
    }
  }, [todo]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Page>
          <div className="kanban-board">
            {['To Do', 'Doing', 'Done'].map((item) => {
              return (
                <KanbanBoard
                  key={item}
                  tasks={data.filter((a: any) => a.type === item)}
                  title={item}
                  onDeleteCard={removeTodo}
                />
              );
            })}
          </div>
        </Page>
      </main>
    </div>
  );
};

export default Home;
