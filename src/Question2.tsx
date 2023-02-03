import { useState, useEffect } from "react";

// interface Product {
//   title: string;
// }
const Question2: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl">
        Please write a custom hook to fetch products from{" "}
        <a
          className="text-blue-500 underline"
          href="https://dummyjson.com/products"
        >
          https://dummyjson.com/products
        </a>
      </h1>

      <div>
        API Documents:{" "}
        <a
          className="text-blue-500 underline"
          href="https://dummyjson.com/docs/products"
        >
          https://dummyjson.com/docs/products
        </a>
      </div>
      <div>
        <div>Requirements:</div>
        <ol className="list-decimal list-inside text-gray-600">
          <li>
            The hook should at least return loading state and the list of
            products
          </li>
          <li>
            Render a <strong>full</strong> list of products
          </li>
          <li>Add a input textbox to filter products</li>
          <li>Add pagination</li>
        </ol>
      </div>

      <hr />

      <ProductInspector />
    </div>
  );
};

/** You should start here */
const apiURI = "https://dummyjson.com/products";
const useProducts = (filterText: string = "", page: number = 1) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Array<any>>([]);
  const limit = 10;
  const skip = page * limit;
  useEffect(() => {
    setLoading(true);
    fetch(`${apiURI}/search?q=${filterText}&limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setProducts(result.products);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [filterText, page]);

  return [isLoading, products];
};

const ProductInspector: React.FC = () => {
  const [filterText, setFilterText] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, products] = useProducts(filterText, page);

  const setFilter = (e: any) => {
    setFilterText(e.target.value);
  };
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };
  return (
    <div className="text-gray-400">
      <input
        type="text"
        value={filterText}
        onChange={setFilter}
        placeholder="Searach..."
      />
      <button onClick={prevPage}>Prev</button>
      <button onClick={nextPage}>Next</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        products.map((currProduct, i: number) => (
          <div key={i}>{currProduct.title}</div>
        ))
      )}
    </div>
  );
};

export default Question2;
