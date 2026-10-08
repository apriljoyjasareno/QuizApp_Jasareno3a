import type { Question } from "../types";

export const questions: Question[] = [
  {
    id: 1,
    text: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    text: "Which CSS property changes the text color?",
    choices: ["font-color", "text-style", "color", "background"],
    correctAnswer: 2,
  },
  {
    id: 3,
    text: "When did JavaScript first appear?",
    choices: ["1998", "1997", "1995", "1999"],
    correctAnswer: 2,
  },
  {
    id: 4,
    text: "Which hook is used to manage state in React?",
    choices: ["useEffect", "useState", "useRef", "useMemo"],
    correctAnswer: 1,
  },
  {
    id: 5,
    text: "Which symbol is used for an ID selector in CSS?",
    choices: [".", "*", "&", "#"],
    correctAnswer: 3,
  },
  {
    id: 6,
    text: "What does CSS stand for?",
    choices: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    text: "Which HTML tag is used for the largest heading?",
    choices: ["<head>", "<h6>", "<heading>", "<h1>"],
    correctAnswer: 3,
  },
  {
    id: 8,
    text: "In React, what do we call data passed from a parent to a child component?",
    choices: ["State", "Props", "Hooks", "Events"],
    correctAnswer: 1,
  },
  {
    id: 9,
    text: "Which keyword declares a variable that cannot be reassigned?",
    choices: ["var", "let", "const", "static"],
    correctAnswer: 2,
  },
  {
    id: 10,
    text: "Which CSS layout system is designed for one-dimensional layouts?",
    choices: ["Flexbox", "Float", "Table", "Position"],
    correctAnswer: 0,
  },
];