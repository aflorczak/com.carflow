import {Post} from "../../interfaces/post";

export const POSTS: Post[] = [
  {
    id: 1,
    slug: 'pierwszy-post',
    title: 'Pierwszy post',
    author: 'Adrian Florczak',
    introduction: 'Zajawka do wpisu wyświetlana na stronie listy wpisów.',
    content: 'Treść posta wyświetlana na stronie konkretnego posta.'
  },
  {
    id: 2,
    slug: 'drugi-post',
    title: 'Drugi post',
    author: 'Adrian Florczak',
    introduction: 'Zajawka do wpisu wyświetlana na stronie listy wpisów.',
    content: 'Treść posta wyświetlana na stronie konkretnego posta.'
  },
  {
    id: 3,
    slug: 'dlaczego-warto-jechac-elektrykiem',
    title: 'Dlaczego warto jechać elektrykiem ?',
    author: 'Karolina Zawadzka',
    introduction: 'Pojazdy elektryczne szturmem wdarły się w nasze życie.',
    content: 'Treść posta wyświetlana na stronie konkretnego posta.'
  },
];
