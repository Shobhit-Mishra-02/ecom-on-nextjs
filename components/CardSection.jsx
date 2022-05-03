import Card from "./Card";

const CardSection = ({ content, name }) => {
  return (
    <div className="pt-16">
      <h2 className="text-center text-4xl font-semibold">{name} fashion</h2>
      <div className="py-6 flex flex-wrap justify-center align-middle items-center">
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
