import css from "./App.module.scss";
import {
  Content1,
  Content2,
  Content3,
  Content4,
  Content5,
  Footer,
  Header,
} from "./components";

const App = () => {
  return (
    <div className={css.app}>
      <Header />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Footer />
    </div>
  );
};

export default App;
