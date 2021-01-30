import React from "react";

const Categories = ({items}) => {

  const [activeItem, setActiveItem] = React.useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
  }

  return (
    <div className="categories">
      <ul>
        {items && items.map((item, index) => {
          return <li className={activeItem === index ? 'active' : ''}
                     onClick={() => onSelectItem(index)}
                     key={`${item}_${index}`}>
            {item}
          </li>
        })}
      </ul>
    </div>
  );
}

export default Categories;