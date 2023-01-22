import { getSession } from "next-auth/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import store from "../../store.json";
export default function Home({ products }) {
  return (
    <div className=" bg-gray-100">
      <Header />
      <main className="mx-auto max-w-screen-2xl">
        {/* Banner */}
        <Banner />
        {/* product */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products =
    store ||
    (await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    ));
  return {
    props: {
      products,
      session,
    },
  };
}
