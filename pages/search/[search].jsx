import { useRouter } from "next/router";
import { useEffect } from "react";
import Card from "../../components/Card";

const SearchSection = ({ content }) => {
  useEffect(() => {
    console.log(content);
  }, [content]);

  // title, price, brand, image, id

  return (
    <div className="flex flex-wrap justify-center align-middle items-center">
      {content.map((item) => (
        <Card
          key={item._id}
          id={item._id}
          title={item.productName}
          brand={item.productBrand}
          image={item.productImage}
          price={item.productPrice}
        />
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const search = context.query.search.replace("%20", " ");

  const data = await fetch(`${process.env.API_URL}/api/db/doSearch`, {
    method: "POST",
    body: JSON.stringify({ search }),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const content = await data.json();

  // console.log(content);
  return {
    props: { content },
  };
}

export default SearchSection;
