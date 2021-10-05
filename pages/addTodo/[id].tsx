import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import AppButton from '../../components/Button';
import Navbar from '../../components/Navbar';
import {
  addTodo,
  deleteTodo,
  editTodo,
  getLastTodo,
  slectTodoById,
} from '../../features/todoSlice';
import { Todo } from './../../model/todo';

const Section = styled.section`
  padding: 25px;
  .todo-view {
    max-width: 500px;
    h2 {
      font-size: 14px;
      font-weight: 500;
      color: #666;
      margin-top: 15px;
    }
  }
  .todo-controls {
    margin-top: 15px;
    button {
      margin-right: 5px;
    }
  }
  h1 {
    font-size: 20px;
    margin: 0;
  }
  p {
    margin-top: 0;
    color: #666;
    font-size: 13px;
  }
  .todo-form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    input,
    select,
    textarea {
      margin: 10px 0px;
      width: 300px;
    }
  }
`;

const AddTodo: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [isEdit, setIsEdit] = React.useState<Boolean>(false);
  const [todo, setTodo] = React.useState<Todo>({
    id: 0,
    title: '',
    description: '',
    type: 'To Do',
  });

  // Fetch last row of todo for increment id
  const lastItem: any = useAppSelector(getLastTodo);

  /**
   * Update model while input change
   * @param e
   */
  const inputChange = (e: any) => {
    setTodo({ ...todo, [e.target.name]: [e.target.value] });
  };

  /**
   * Add and edit todo
   */
  const addTodoItem = () => {
    if (todo.id === 0) {
      todo.id = Number(lastItem.id) + 1;
      dispatch(addTodo(todo));
    } else {
      dispatch(editTodo(todo));
    }
    router.push('/list');
  };

  /**
   * Delete item from store by id
   */
  const deleteTodoItem = () => {
    const { id } = router.query;
    dispatch(deleteTodo(id));
    router.push('/list');
  };

  /**
   * Fetch Data by id if it is edit mode
   */
  const todoItem: any = useAppSelector(slectTodoById(Number(router.query.id)));
  React.useEffect(() => {
    if (todoItem.length) {
      setTodo(todoItem[0]);
    } else setIsEdit(true);
  }, []);

  return (
    <main>
      <Section>
        {isEdit && (
          <>
            <h1>Add New Todo</h1>
            <p>Add new todo data by fill the form</p>
            <div className="todo-form">
              <select
                onChange={(e: any) =>
                  setTodo({ ...todo, type: e.target.value })
                }
                value={todo.type}
              >
                <option value="To Do">To Do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
              <input
                name="title"
                type="text"
                placeholder="Title"
                value={todo.title}
                onChange={(e: object) => inputChange(e)}
              />
              <textarea
                name="description"
                placeholder="Description"
                value={todo.description}
                onChange={(e: object) => inputChange(e)}
              />
            </div>
          </>
        )}

        {!isEdit && (
          <div className="todo-view">
            <h1>{todo.title}</h1>
            <p>In List {todo.type}</p>
            <h2>Description</h2>
            <p>{todo.description}</p>
          </div>
        )}

        <div className="todo-controls">
          {isEdit && (
            <>
              <AppButton
                type="success"
                text="Save todo"
                onClick={() => addTodoItem()}
              />
              <AppButton
                type="danger"
                text="Cancel"
                onClick={() => router.back()}
              />
            </>
          )}
          {!isEdit && (
            <>
              <AppButton
                type="primary"
                text="Edit todo"
                onClick={() => setIsEdit(true)}
              />
              <AppButton
                type="danger"
                text="Delete"
                onClick={() => deleteTodoItem()}
              />
            </>
          )}
        </div>
      </Section>
    </main>
  );
};

export default AddTodo;
