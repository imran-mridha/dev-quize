import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import QuizQus from "../components/QuizQus/QuizQus";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "../Layoutes/Main";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',

        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/topics',
        element: <Topics />
      },
      {
        path: '/quiz/:quizId',
        loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
        element: <QuizQus />
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/blog',
        element: <Faq />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])