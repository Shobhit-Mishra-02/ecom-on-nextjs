import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const CardSection = ({ content, name }) => {
  // const [prod, setProd] = useState([]);

  // const makeRequest = async () => {
  //   const data = await fetch(`/api/db/prodByCategory/${id}`);
  //   const json = await data.json();
  //   setProd(json);
  // };

  // useEffect(() => {
  //   makeRequest();
  // }, []);

  return (
    <div className="pt-16">
      <h2 className="text-center text-4xl font-semibold">{name} fashion</h2>
      <div className="py-6 flex flex-wrap justify-center align-middle items-center">
        {/* {prod.length ? (
          prod.map((item) => (
            <Card
              key={item._id}
              title={item.productName}
              brand={item.productBrand}
              price={item.productPrice}
              image={item.productImage}
              id={item._id}
            />
          ))
        ) : (
          <div>loading</div>
        )} */}
        {content.map((item) => (
          <Card
            key={item._id}
            title={item.productName}
            brand={item.productBrand}
            price={item.productPrice}
            image={item.productImage}
            id={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
