import css from "./App.module.scss";
import {
  Content1,
  Content2,
  Content3,
  Content4,
  Content5,
  Content6,
  Header,
  PowerBIWidget,
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
      <PowerBIWidget />
      <Content6 />
    </div>
  );
};

export default App;
