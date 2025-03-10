'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const products = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Phone", price: 800, category: "Electronics" },
  { id: 3, name: "Shirt", price: 50, category: "Clothing" },
  { id: 4, name: "Jeans", price: 60, category: "Clothing" },
  { id: 5, name: "Washing Machine", price: 500, category: "Home Appliances" },
  { id: 6, name: "Headphones", price: 200, category: "Electronics" },
  { id: 7, name: "Shoes", price: 100, category: "Clothing" }
];

export default function ProductList() {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let sortedProducts = [...products];

    // ✅ Sort Handling
    const sortOrder = searchParams.get('sort');
    if (sortOrder === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    // ✅ Category Filtering
    const category = searchParams.get('category');
    if (category) {
      sortedProducts = sortedProducts.filter(p => p.category === category);
    }

    // ✅ Pagination
    const page = parseInt(searchParams.get('page') || '1', 10);
    const perPage = 3;
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    sortedProducts = sortedProducts.slice(startIndex, endIndex);

    setFilteredProducts(sortedProducts);
  }, [searchParams]);

  function updateQuery(param: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(param, value);
    } else {
      params.delete(param);
    }
    window.history.pushState(null, '', `?${params.toString()}`);
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">🛒 Product List</h2>

      {/* 🔹 Sorting Buttons */}
      <div className="mb-4">
        <button onClick={() => updateQuery('sort', 'asc')} className="px-3 py-1 bg-blue-500 text-white mr-2">Sort by Price (Low to High)</button>
        <button onClick={() => updateQuery('sort', 'desc')} className="px-3 py-1 bg-blue-500 text-white">Sort by Price (High to Low)</button>
      </div>

      {/* 🔹 Category Filter */}
      <div className="mb-4">
        <button onClick={() => updateQuery('category', 'Electronics')} className="px-3 py-1 bg-green-500 text-white mr-2">Electronics</button>
        <button onClick={() => updateQuery('category', 'Clothing')} className="px-3 py-1 bg-green-500 text-white mr-2">Clothing</button>
        <button onClick={() => updateQuery('category', 'Home Appliances')} className="px-3 py-1 bg-green-500 text-white">Home Appliances</button>
        <button onClick={() => updateQuery('category', '')} className="px-3 py-1 bg-gray-500 text-white ml-2">Reset</button>
      </div>

      {/* 🔹 Product List */}
      <ul className="border p-4 rounded">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="py-2 border-b">
              {product.name} - ${product.price} ({product.category})
            </li>
          ))
        ) : (
          <p className="text-red-500">No products found.</p>
        )}
      </ul>

      {/* 🔹 Pagination */}
      <div className="mt-4">
        <button onClick={() => updateQuery('page', '1')} className="px-3 py-1 bg-gray-700 text-white mr-2">Page 1</button>
        <button onClick={() => updateQuery('page', '2')} className="px-3 py-1 bg-gray-700 text-white">Page 2</button>
      </div>
    </div>
  );
}
