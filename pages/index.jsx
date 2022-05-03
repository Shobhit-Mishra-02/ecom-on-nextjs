import Head from "next/head";
import Slider from "../components/Slider";
// import Card from "../components/Card";
import CardSection from "../components/CardSection";
// import Dropdown from "../components/Userdropdown";
import { userProfileStatus } from "../components/context";
import { useContext, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home({ content, prodContent, obj }) {
  const { user } = useUser();
  const [userProfile, setUserProfile] = useContext(userProfileStatus);

  const requestToUserProfile = async () => {
    const data = await fetch("/api/db/getUser", {
      method: "POST",
      body: JSON.stringify({ userEmail: user.email }),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await data.json();

    if (json.length) {
      setUserProfile(1);
    }
  };

  // console.log(content, prodContent);
  console.log(obj);

  useEffect(() => {
    if (user) {
      requestToUserProfile();
    }
  }, [user]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-16 pb-10">
        <Slider />
      </div>

      {/* {content.map((item) => (
        <CardSection key={item._id} id={item._id} name={item.categoryName} />
      ))} */}
      {Object.keys(obj).map((key) => (
        <CardSection key={key} content={obj[key]} name={key} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch(`${process.env.API_URL}/api/db/category`);
  const content = await data.json();

  const productData = await fetch(`${process.env.API_URL}/api/db/prod`);
  const prodContent = await productData.json();

  let obj = {};
  content.forEach((element) => {
    let temp = [];
    prodContent.forEach((item) => {
      if (item.category === element._id) {
        temp.push(item);
      }
    });

    obj[element.categoryName] = temp;
  });

  return {
    props: { content, prodContent, obj },
  };
}
