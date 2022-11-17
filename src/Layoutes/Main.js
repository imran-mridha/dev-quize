import React, {createContext} from 'react';
import { Outlet,useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { ScrollRestoration } from "react-router-dom";

export const QuizContext = createContext([])

const Main = () => {
  const quizes = useLoaderData();
  return (
    <QuizContext.Provider value = {quizes.data}>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </QuizContext.Provider>
  );
};

export default Main;