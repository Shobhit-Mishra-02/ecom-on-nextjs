import { useRouter } from "next/router";
import { useEffect } from "react";

const SearchSection = ({ content }) => {
  useEffect(() => {
    console.log(content);
  }, [content]);

  return <div>search section </div>;
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
