import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/MyFooter";
import MyHero from "./components/MyHero";
import MyNav from "./components/MyNav";

import fantasyBooks from "./books/fantasy.json";
import historyBooks from "./books/history.json";
import horrorBooks from "./books/horror.json";
import romanceBooks from "./books/romance.json";
import scifiBooks from "./books/scifi.json";
import BookList from "./components/BookList";

const books = [...fantasyBooks, ...historyBooks, ...horrorBooks, ...romanceBooks, ...scifiBooks];

books.sort(() => Math.random() - 0.5);
const selectedBooks = books.slice(0, 30);

function App() {
  return (
    <>
      <MyNav />
      <MyHero />
      <BookList selectedBooks={selectedBooks} />
      <MyFooter />
    </>
  );
}

export default App;
