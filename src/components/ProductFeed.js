import Product from "./Product";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, description, price, image, category }) => (
          <Product
            key={id}
            title={title}
            description={description}
            price={price}
            image={image}
            category={category}
          />
        ))}

      <img
        src="https://links.papareact.com/dyz"
        alt=""
        className="md:col-span-full"
      />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, description, price, image, category }) => (
            <Product
              key={id}
              title={title}
              description={description}
              price={price}
              image={image}
              category={category}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, description, price, image, category }) => (
          <Product
            key={id}
            title={title}
            description={description}
            price={price}
            image={image}
            category={category}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
