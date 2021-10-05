import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';
import Navbar from './../components/Navbar';

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
  return (
    <Page>
      <Head>
        <title>Trello</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Page>
  );
};

export default Home;