import ProductList from "../components/ProductList";
import ProductListSearch from "../components/ProductListSearch";

export default function Dashboard() {
    return (
      <div className="p-5">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>এটি Dashboard এর মূল পেজ।</p>
        <ProductList/>
        <ProductListSearch/>
      </div>
    );
  }
  