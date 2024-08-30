import data_product from "../Assets/data";
import "./RelatedProducs.css";
import Item from "../Item/Item";

const RelatedProducs = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Producs</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducs;
