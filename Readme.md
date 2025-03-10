
<details>
  <summary>Basic Routing</summary>
  
  ## Content Revealed
  
  
  


# 🚀 **Next.js 14-এ Nested Route (নেস্টেড রাউট) ব্যবহারের বাংলা টিউটোরিয়াল (TypeScript + TSX)**
Next.js-এ **Nested Routes** মানে হলো **একটি রাউটের ভিতরে অন্য রাউট তৈরি করা**।  
এটি **ড্যাশবোর্ড, ব্লগ পোস্ট, প্রোফাইল, অ্যাডমিন প্যানেল ইত্যাদির জন্য দরকারি**।  

---

## 🔹 **1️⃣ Basic Nested Route তৈরি করা**  
👉 ধরুন, আমাদের `/dashboard` রাউটের ভিতরে **"Users"** ও **"Settings"** পেজ থাকবে।

### ✅ **📁 ফোল্ডার স্ট্রাকচার**
```
app/
│── dashboard/
│   │── page.tsx          (Dashboard Home Page)
│   │── users/
│   │   │── page.tsx      (Users Page)
│   │── settings/
│   │   │── page.tsx      (Settings Page)
```

### **📌 `app/dashboard/page.tsx` (Dashboard মূল পেজ)**
```tsx
export default function Dashboard() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>এটি Dashboard এর মূল পেজ।</p>
    </div>
  );
}
```
🛠 **রাউট:** `/dashboard`  

---

### **📌 `app/dashboard/users/page.tsx` (Users Page)**
```tsx
export default function UsersPage() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Users</h1>
      <p>এটি Users Page যেখানে ইউজার লিস্ট থাকবে।</p>
    </div>
  );
}
```
🛠 **রাউট:** `/dashboard/users`  

---

### **📌 `app/dashboard/settings/page.tsx` (Settings Page)**
```tsx
export default function SettingsPage() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Settings</h1>
      <p>এটি Settings Page যেখানে সেটিংস পরিবর্তন করা যাবে।</p>
    </div>
  );
}
```
🛠 **রাউট:** `/dashboard/settings`

---

## 🔹 **2️⃣ Nested Layout ব্যবহার করা (Shared Navbar/Footer)**  
👉 **`layout.tsx` ফাইল ব্যবহার করে Navbar/Footer শেয়ার করা যাবে।**  

### **📌 `app/dashboard/layout.tsx` (Dashboard Layout)**
```tsx
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5">
      <nav className="mb-5">
        <Link href="/dashboard" className="mr-4 text-blue-500">Home</Link>
        <Link href="/dashboard/users" className="mr-4 text-blue-500">Users</Link>
        <Link href="/dashboard/settings" className="text-blue-500">Settings</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
```
✅ **এখন `/dashboard` রুটের প্রতিটি পেজে Navbar দেখাবে।**  
🛠 **রাউটগুলো:** `/dashboard`, `/dashboard/users`, `/dashboard/settings`

---

## 🔹 **3️⃣ ডায়নামিক রাউট তৈরি করা**
👉 ধরুন, `/dashboard/users/1`, `/dashboard/users/2` এরকম **ডাইনামিক রাউট লাগবে**।

### ✅ **📁 ফোল্ডার স্ট্রাকচার**
```
app/
│── dashboard/
│   │── users/
│   │   │── [id]/
│   │   │   │── page.tsx   (User Details Page)
```

### **📌 `app/dashboard/users/[id]/page.tsx` (User Details Page)**
```tsx
export default function UserDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">User ID: {params.id}</h1>
      <p>এটি ইউজারের ডিটেইলস পেজ।</p>
    </div>
  );
}
```
✅ **এখন `/dashboard/users/1`, `/dashboard/users/2` ইত্যাদি রাউট কাজ করবে।**

---

## 🔹 **4️⃣ Loading Skeleton দেখানো (Suspense & Loading State)**
👉 **ডাটা লোড হতে দেরি হলে "Loading..." দেখাতে পারি।**  

### **📌 `app/dashboard/loading.tsx`**
```tsx
export default function Loading() {
  return <p className="text-center text-gray-500">Loading...</p>;
}
```
✅ **এখন `/dashboard` এ লোডিং স্টেট দেখাবে ডাটা আসার আগে।**  

---

## 🎯 **সংক্ষেপে**
| বিষয় | ব্যাখ্যা |
|------|---------|
| **Basic Nested Route** | `app/dashboard/` ফোল্ডারের ভিতরে আলাদা পেজ তৈরি করলে নেস্টেড রাউট কাজ করবে। |
| **Shared Layout** | `layout.tsx` ব্যবহার করে Navbar/Footer যোগ করা যায়। |
| **Dynamic Route** | `app/dashboard/users/[id]/page.tsx` ব্যবহার করলে `/users/1`, `/users/2` রাউট কাজ করবে। |
| **Loading State** | `loading.tsx` ফাইল ব্যবহার করে লোডিং ইফেক্ট যোগ করা যায়। |

---

## 🎉 **শেষ কথা**
✅ **Next.js-এ Nested Route সহজেই তৈরি করা যায়।**  
✅ **Shared Layout ব্যবহার করলে UI ম্যানেজ করা সহজ হয়।**  
✅ **ডাইনামিক রাউট ও লোডিং স্ক্রিন যোগ করলে প্রজেক্ট আরও ভালো হয়।**  

🚀 **এখন আপনি Next.js-এ Nested Routing ব্যবহার করতে পারবেন! Happy Coding! 🎯**

</details>
<details>
<summary>Native History API</summary>
### Next.js-এ Native History API ব্যবহার করা  

Next.js-এ **window.history.pushState** এবং **window.history.replaceState** মেথড ব্যবহার করে ব্রাউজারের **history stack** আপডেট করা যায়, যাতে পেজ রিলোড ছাড়াই URL পরিবর্তন করা যায়।  

এই মেথডগুলো **Next.js Router** এর সাথে ইন্টিগ্রেট হয়, ফলে **usePathname** এবং **useSearchParams** হুকের মাধ্যমে URL পরিবর্তন ট্র্যাক করা যায়।

---

## 🔹 **window.history.pushState**  
এটি ব্রাউজারের **history stack**-এ নতুন একটি এন্ট্রি যোগ করে, ফলে ইউজার **Back** বাটন ব্যবহার করে আগের অবস্থায় ফিরে যেতে পারেন।  

💡 **উদাহরণ:**  
একটি প্রোডাক্ট লিস্ট সাজানোর জন্য **pushState** ব্যবহার করা যেতে পারে।  

```tsx
'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SortProducts() {
  const searchParams = useSearchParams()
 
  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }
 
  return (
    <>
      <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
      <button onClick={() => updateSorting('desc')}>Sort Descending</button>
    </>
  )
}
```
📌 **কী হচ্ছে এখানে?**  
- **useSearchParams()** দিয়ে বর্তমান URL-এর **query parameters** নেওয়া হচ্ছে।  
- `updateSorting()` ফাংশনটি `sort` প্যারামিটার আপডেট করে **pushState** ব্যবহার করে URL পরিবর্তন করছে।  
- ফলে ইউজার যখন **Back** বাটন চাপবে, তখন আগের **sort order** ফিরে পাবে।  

---

## 🔹 **window.history.replaceState**  
এটি বর্তমান **history entry** পরিবর্তন করে, তবে নতুন এন্ট্রি যোগ করে না। ফলে **Back** বাটন চাপলে আগের অবস্থায় ফেরা যায় না।  

💡 **উদাহরণ:**  
ভাষা পরিবর্তন (Locale Switch) করার জন্য **replaceState** ব্যবহার করা যেতে পারে।  

```tsx
'use client'
 
import { usePathname } from 'next/navigation'
 
export function LocaleSwitcher() {
  const pathname = usePathname()
 
  function switchLocale(locale: string) {
    // নতুন ভাষার জন্য URL পরিবর্তন
    const newPath = `/${locale}${pathname}`
    window.history.replaceState(null, '', newPath)
  }
 
  return (
    <>
      <button onClick={() => switchLocale('en')}>English</button>
      <button onClick={() => switchLocale('fr')}>French</button>
    </>
  )
}
```
📌 **কী হচ্ছে এখানে?**  
- **usePathname()** দিয়ে বর্তমান পেজের **path** নেওয়া হচ্ছে।  
- `switchLocale()` ফাংশনটি নতুন ভাষা যুক্ত করে **replaceState** ব্যবহার করে URL পরিবর্তন করছে।  
- কিন্তু এটি **pushState** নয়, তাই ইউজার **Back** বাটনে চাপলে আগের ভাষায় ফিরে যেতে পারবে না।  

---

## 🛠 **সংক্ষেপে পার্থক্য:**  

| Method | কাজের ধরন | Back Button কাজ করে? |
|--------|-----------|----------------------|
| **pushState** | নতুন **history entry** যোগ করে | ✅ হ্যাঁ |
| **replaceState** | বর্তমান **history entry** পরিবর্তন করে | ❌ না |

এগুলো ব্যবহার করে Next.js-এ ডাইনামিকভাবে URL পরিবর্তন করা যায়, যা **SEO-friendly** এবং **user experience** উন্নত করে! 🚀
</details>

<details>
<summary>useSearchParams for sort </summary>
### **🛒 ৭টি প্রোডাক্ট নিয়ে `useSearchParams` ইমপ্লিমেন্টেশন**  
এখানে আমরা **Next.js** ব্যবহার করে ৭টি প্রোডাক্টের একটি লিস্ট তৈরি করবো, যেখানে ইউজার **Sort (Ascending/Descending), Category ফিল্টার এবং Pagination** করতে পারবে।  

---

## **📌 Features**
✅ **Query Parameters থেকে Data Fetch করবে**  
✅ **Sorting (Price Wise Asc/Desc) করা যাবে**  
✅ **Category Wise ফিল্টার করা যাবে**  
✅ **Pagination (একবারে ৩টি প্রোডাক্ট দেখানো হবে)**  

---

### **📜 Step 1: Dummy Product Data**
```tsx
const products = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Phone", price: 800, category: "Electronics" },
  { id: 3, name: "Shirt", price: 50, category: "Clothing" },
  { id: 4, name: "Jeans", price: 60, category: "Clothing" },
  { id: 5, name: "Washing Machine", price: 500, category: "Home Appliances" },
  { id: 6, name: "Headphones", price: 200, category: "Electronics" },
  { id: 7, name: "Shoes", price: 100, category: "Clothing" }
];
```

---

### **📜 Step 2: `ProductList.tsx` Component**
```tsx
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
```

---

## **🚀 কীভাবে কাজ করবে?**
1. **Sorting:**  
   - "Sort by Price (Low to High)" ক্লিক করলে URL: `?sort=asc`  
   - "Sort by Price (High to Low)" ক্লিক করলে URL: `?sort=desc`  

2. **Filtering by Category:**  
   - "Electronics" ক্লিক করলে URL: `?category=Electronics`  
   - "Clothing" ক্লিক করলে URL: `?category=Clothing`  
   - "Home Appliances" ক্লিক করলে URL: `?category=Home Appliances`  

3. **Pagination:**  
   - "Page 1" ক্লিক করলে URL: `?page=1` (প্রথম ৩টি প্রোডাক্ট দেখাবে)  
   - "Page 2" ক্লিক করলে URL: `?page=2` (পরবর্তী ৩টি প্রোডাক্ট দেখাবে)  

---

## **🔥 সংক্ষেপে `useSearchParams` দিয়ে কী করা হলো?**
✅ **Query থেকে `sort`, `category`, `page` রিড করা হলো।**  
✅ **Sorting অনুযায়ী প্রোডাক্ট সাজানো হলো।**  
✅ **Category অনুসারে ফিল্টার করা হলো।**  
✅ **Pagination যোগ করা হলো (একবারে ৩টি প্রোডাক্ট দেখানো হলো)।**  
✅ **URL আপডেটের জন্য `window.history.pushState` ব্যবহার করা হলো।**  

🚀 **এটি ব্যবহার করে Next.js-এ ডাইনামিক ফিল্টারিং ও পেজিনেশন সহজে করা সম্ভব!** 🎯
</details>