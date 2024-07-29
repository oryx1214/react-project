import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  {
    title: "Мужские кроссовки Nike Blazer Mid Suede green",
    price: 12999,
    imageUrl: "https://i.imgur.com/KyELgiP.jpeg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex  align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="seacrh-block d-flex">
            <img src="/img/search.svg " alt="Search"></img>
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
