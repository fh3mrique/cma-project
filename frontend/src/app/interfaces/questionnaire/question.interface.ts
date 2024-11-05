export interface Question {
    id: number;
    text: string;
    options: Array<{ letter: string; answer: string }>;
}