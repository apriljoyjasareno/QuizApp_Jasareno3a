export interface Question {
  id: number;
  text: string;
  choices: string[];
  correctAnswer: number; // index of the correct choice (0-3)
}