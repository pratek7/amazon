import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState, useEffect } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { loadStripe } from "@stripe/stripe-js"; // stripe plugin
import axios from "axios";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useSession } from "next-auth/react";
const stripPromise = loadStripe(process.env.stripe_public_key);
const max_rating = 1;
const min_rating = 5;
const Product = ({ id, title, description, price, image, category }) => {
  const [rating, setRating] = useState(0);

  const [hasPrime, setIsPrimeEnabled] = useState(0);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (max_rating - min_rating + 1)) + min_rating
    );
    setIsPrimeEnabled(Math.random() < 0.5);
  }, []);
  const dispath = useDispatch();

  const addItemToBasket = () => {
    const product = { id, title, description, price, image, category };
    dispath(addToBasket(product));
  };
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const createCheckout = async () => {
    const stripe = await stripPromise;
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items,
      email: session.user.email,
    });
    //redirect to payment info
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.session.id,
    });
    if (result.error) alert(result.error.message);
  };
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 hover:shadow-lg hover:scale-105 transform hover:rounded-t-lg">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        alt="ok"
        height={200}
        width={200}
        style={{
          objectFit: "contain",
        }}
        className="cursor-pointer hover:scale-105 transform "
      />
      <h4 className="my-3">{title}</h4>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <div className="mb-5">
        <Currency quantity={price * 100} currency="NPR" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            loading="lazy"
            src="https://links.papareact.com/fdw"
            alt="icon"
            className="w-12"
          />
          <p className="text-xs text-gray-500">Free Delevery</p>
        </div>
      )}
      <button onClick={addItemToBasket} className="mt-auto button">
        Add To Basket
      </button>
    </div>
  );
};

export default Product;
