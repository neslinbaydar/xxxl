import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import data from "../data.json";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // use this function to set product when page is created
    setProducts(data)
  }, [])

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value.toLowerCase());
  }

  return (
    <div className="container py-3">
      <form onSubmit={handleSearch} className="d-flex">
        <input className="form-control me-2" name="search" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="row justify-content-center">
        {products?.data?.filter(product => product.name.toLowerCase().includes(search) || product.brand.toLowerCase().includes(search)).map(product =>
          <div className='col-lg-4 col-sm-6 py-3' key={product.id}>
            <ProductCard
              image={product?.image}
              name={product?.name}
              price={product?.price}
              id={product?.id}
              brand={product?.brand}
            >
            </ProductCard>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;