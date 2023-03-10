import { getSession, useSession } from "next-auth/react";
import db from "../../firebase";
import Header from "../components/Header";
import moment from "moment";
import OrderItem from "../components/OrderItem";

const Order = ({ orders }) => {
  const { data: session } = useSession();
  return (
    <div className="">
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b pb-1 mb-2 border-yellow-400">
          Your Order
        </h1>
        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <h2>Singin To See Orders</h2>
        )}
        <div className="mt-5 space-y-4">
          {orders?.map(
            ({ id, amount, amount_shipping, items, image, timestamp }) => (
              <OrderItem
                id={id}
                amount={amount}
                amount_shipping={amount_shipping}
                items={items}
                image={image}
                timestamp={timestamp}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default Order;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  const stripeOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amount_shipping: order.data().amount_shipping,
      image: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );
  return { props: { orders, session } };
}
