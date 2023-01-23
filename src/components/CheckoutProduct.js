import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";
const CheckoutProduct = ({
  id,
  title,
  description,
  price,
  image,
  hasPrime,
  rating,
}) => {
  const dispath = useDispatch();
  const removeItemFromBasket = () => {
    dispath(removeFromBasket({ id }));
  };

  return (
    <div className=" grid grid-cols-5">
      <Image
        src={image}
        alt="ok"
        height={200}
        width={200}
        style={{
          width: "auto",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price * 100} currency="NPR" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              src="https://links.papareact.com/fdw"
              alt="icon"
              className="w-12"
            />
            <p className="text-xs text-gray-500">Free Delevery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-auto">
        <button onClick={removeItemFromBasket} className="button">
          Remove From Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
