import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaCard from "../components/PizzaCard";
import React from "react";

const Home = () => {
  return(
    <div className="container">
      <div className="content__top">
        <Categories items={[
          'Все',
          'Мясные',
          'Вегетарианская',
          'Гриль',
          'Острые',
          'Закрытые',
        ]}/>
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}

export default Home;
