<details> 
 <summary>App structure and installations </summary>
 একটি **Next.js App Router**-ভিত্তিক অ্যাপ্লিকেশনের জন্য একটি **ফাইল স্ট্রাকচার** এবং **বিস্তারিত 

---

### ফাইল স্ট্রাকচার (File Structure)

```
my-next-mongoose-app/
├── .env
├── .gitignore
├── package.json
├── yarn.lock (বা package-lock.json)
├── next.config.js
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/                  # App Router
│   │   ├── layout.tsx        # রুট লেআউট
│   │   ├── page.tsx          # হোম পেজ
│   │   ├── api/              # API রাউট (যদি Route Handlers ব্যবহার করেন)
│   │   │   └── example/
│   │   │       └── route.ts
│   │   ├── (auth)/           # গ্রুপড রাউট (যেমন: অথেন্টিকেশন)
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── signup/
│   │   │       └── page.tsx
│   │   ├── dashboard/        # নেস্টেড রাউট
│   │   │   ├── layout.tsx    # নেস্টেড লেআউট
│   │   │   ├── page.tsx      # ড্যাশবোর্ড পেজ
│   │   │   └── settings/
│   │   │       └── page.tsx
│   │   └── error.tsx         # এরর পেজ
│   ├── components/           # পুনরায় ব্যবহারযোগ্য UI কম্পোনেন্ট
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── lib/                  # ইউটিলিটি ফাংশন এবং লাইব্রেরি
│   │   ├── dbConnect.ts      # Mongoose কানেকশন সেটআপ
│   │   └── utils.ts
│   ├── models/               # Mongoose মডেল
│   │   ├── User.ts
│   │   └── Post.ts
│   ├── services/             # বিজনেস লজিক এবং সার্ভিস লেয়ার
│   │   ├── userService.ts
│   │   └── postService.ts
│   ├── styles/               # গ্লোবাল স্টাইল বা CSS মডিউল
│   │   ├── globals.css
│   │   └── Home.module.css
│   ├── hooks/                # কাস্টম React হুক
│   │   └── useAuth.ts
│   ├── contexts/             # React কনটেক্সট
│   │   └── AuthContext.ts
│   └── config/               # কনফিগারেশন ফাইল
│       └── constants.ts
├── tests/                    # টেস্ট ফাইল
│   ├── unit/
│   └── integration/
└── README.md
```

---

### ফাইল স্ট্রাকচার ব্যাখ্যা:

1. **`.env`**  
   - এনভায়রনমেন্ট ভেরিয়েবল স্টোর করার জন্য (যেমন: MongoDB কানেকশন স্ট্রিং)।

2. **`public/`**  
   - স্ট্যাটিক অ্যাসেট যেমন ইমেজ, আইকন, এবং `robots.txt`।

3. **`src/app/` (App Router)**  
   - এটি Next.js 13+ এর নতুন ফিচার। প্রতিটি ফোল্ডার একটি রাউট রিপ্রেজেন্ট করে।
   - `layout.tsx`: শেয়ার্ড লেআউট ডিফাইন করে।
   - `page.tsx`: রাউটের মূল পেজ।
   - `api/`: API রাউট (যদি Route Handlers ব্যবহার করেন)।

4. **`src/components/`**  
   - পুনরায় ব্যবহারযোগ্য UI কম্পোনেন্ট (যেমন: হেডার, ফুটার)।

5. **`src/lib/`**  
   - ইউটিলিটি ফাংশন এবং লাইব্রেরি।
   - `dbConnect.ts`: MongoDB-এর সাথে Mongoose কানেকশন সেটআপ করে।

6. **`src/models/`**  
   - Mongoose মডেল (যেমন: `User.ts`, `Post.ts`)।

7. **`src/services/`**  
   - বিজনেস লজিক এবং সার্ভিস লেয়ার (যেমন: `userService.ts`, `postService.ts`)।

8. **`src/styles/`**  
   - গ্লোবাল স্টাইল বা CSS মডিউল।

9. **`src/hooks/`**  
   - কাস্টম React হুক (যেমন: `useAuth.ts`)।

10. **`src/contexts/`**  
    - React কনটেক্সট (যেমন: `AuthContext.ts`)।

11. **`src/config/`**  
    - কনফিগারেশন ফাইল (যেমন: `constants.ts`)।

12. **`tests/`**  
    - ইউনিট এবং ইন্টিগ্রেশন টেস্ট।

13. **`README.md`**  
    - প্রজেক্ট ডকুমেন্টেশন।

---

### ধাপে ধাপে অ্যাপ তৈরি করার গাইড:

#### ধাপ ১: প্রজেক্ট সেটআপ
1. টার্মিনালে নিচের কমান্ড রান করুন:
   ```bash
   npx create-next-app@latest my-next-mongoose-app
   ```
2. TypeScript সিলেক্ট করুন এবং অন্যান্য অপশন কনফিগার করুন।

3. প্রজেক্ট ফোল্ডারে যান:
   ```bash
   cd my-next-mongoose-app
   ```

4. Mongoose এবং অন্যান্য ডিপেন্ডেন্সি ইন্সটল করুন:
   ```bash
   npm install mongoose
   ```

---

#### ধাপ ২: MongoDB কানেকশন সেটআপ
1. `.env` ফাইল তৈরি করুন এবং MongoDB কানেকশন স্ট্রিং যোগ করুন:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/my-database
   ```

2. `src/lib/dbConnect.ts` ফাইল তৈরি করুন:
   ```typescript
   import mongoose from 'mongoose';

   const MONGODB_URI = process.env.MONGODB_URI;

   if (!MONGODB_URI) {
     throw new Error('MONGODB_URI environment variable is missing');
   }

   let cached = (global as any).mongoose;

   if (!cached) {
     cached = (global as any).mongoose = { conn: null, promise: null };
   }

   async function dbConnect() {
     if (cached.conn) {
       return cached.conn;
     }

     if (!cached.promise) {
       cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
         return mongoose;
       });
     }

     cached.conn = await cached.promise;
     return cached.conn;
   }

   export default dbConnect;
   ```

---

#### ধাপ ৩: Mongoose মডেল তৈরি করুন
1. `src/models/User.ts` ফাইল তৈরি করুন:
   ```typescript
   import mongoose from 'mongoose';

   const userSchema = new mongoose.Schema({
     name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
   });

   export default mongoose.models.User || mongoose.model('User', userSchema);
   ```

---

#### ধাপ ৪: হোম পেজে ডেটা ফেচ করুন
1. `src/app/page.tsx` ফাইল এডিট করুন:
   ```tsx
   import dbConnect from '@/lib/dbConnect';
   import User from '@/models/User';

   export default async function Home() {
     await dbConnect();
     const users = await User.find().limit(10); // MongoDB থেকে ইউজার ফেচ করুন

     return (
       <div>
         <h1>Welcome to My App</h1>
         <ul>
           {users.map((user) => (
             <li key={user._id}>{user.name}</li>
           ))}
         </ul>
       </div>
     );
   }
   ```

---

#### ধাপ ৫: অ্যাপ রান করুন
1. টার্মিনালে নিচের কমান্ড রান করুন:
   ```bash
   npm run dev
   ```

2. ব্রাউজারে `http://localhost:3000` ওপেন করুন এবং আপনার অ্যাপ দেখুন।

---

এই গাইড অনুসরণ করে আপনি একটি **Next.js App Router**-ভিত্তিক অ্যাপ তৈরি করতে পারবেন, যা **Mongoose** এবং **MongoDB**-এর সাথে সংযুক্ত। এটি মডার্ন এবং স্কেলেবল অ্যাপ্লিকেশন ডেভেলপমেন্টের জন্য উপযুক্ত। 😊
</details>





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

<details>
<summary>Loading UI এবং Streaming suspanse </summary>

নিচে Next.js-এ **Loading UI এবং Streaming** ব্যাখ্যা করা হলো এবং **Skeleton UI সহ লোডিং পেজের** একটি উদাহরণ দেওয়া হলো।

---

## **🔹 Loading UI এবং Streaming**
### **📌 Loading UI কী?**
Next.js-এ `loading.js` একটি **special file**, যা **React Suspense** ব্যবহার করে **loading state** তৈরি করতে সাহায্য করে। এটি রুট সেগমেন্ট (route segment) লোড হওয়ার সময় **তৎক্ষণাৎ একটি লোডিং UI** দেখায় এবং **নতুন কন্টেন্ট** লোড হওয়ার পর স্বয়ংক্রিয়ভাবে পরিবর্তন করে।

### **🔥 Instant Loading States**
- ব্যবহারকারীরা বুঝতে পারে যে অ্যাপটি **রেসপন্স করছে।**
- স্ক্রিনের গুরুত্বপূর্ণ অংশ যেমন **কভার ফটো, টাইটেল বা Skeleton UI** লোড করা যায়।
- এটি **ভালো ইউজার এক্সপেরিয়েন্স** প্রদান করে।

### **📂 `loading.js` ফাইল যুক্ত করার নিয়ম**
ফোল্ডারের ভিতরে `loading.js` ফাইল রাখলেই এটি **স্বয়ংক্রিয়ভাবে `layout.js`-এর ভেতরে `page.js`-কে wrap** করবে।

📌 **ফাইল স্ট্রাকচার:**
```
app/
 ├── dashboard/
 │    ├── page.tsx
 │    ├── layout.tsx
 │    ├── loading.tsx  <-- ✅ এখানে লোডিং UI যুক্ত হবে।
```

### **📌 Skeleton UI সহ `loading.tsx` ফাইলের কোড**
```tsx
import React from 'react';

export default function Loading() {
  return (
    <div className="p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-8 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
}
```
🔹 **এখানে কী হচ্ছে?**
- `animate-pulse` ক্লাস ব্যবহার করে **সোফট বাউন্সিং এফেক্ট** দেওয়া হয়েছে।
- `bg-gray-300` ব্যাকগ্রাউন্ড রঙের মাধ্যমে **Skeleton UI** তৈরি করা হয়েছে।

---

## **🔹 Streaming with Suspense**
### **📌 Streaming কীভাবে কাজ করে?**
📌 **পুরোনো SSR প্রসেস:**  
1️⃣ সার্ভার থেকে ডাটা ফেচ করা হয়।  
2️⃣ সার্ভার HTML রেন্ডার করে।  
3️⃣ ক্লায়েন্টে HTML, CSS, এবং JavaScript পাঠানো হয়।  
4️⃣ পেজ প্রথমে **নন-ইন্টারঅ্যাকটিভ** থাকে।  
5️⃣ **React হাইড্রেট করে** পেজকে ইন্টারঅ্যাকটিভ করে।  

📌 **Streaming SSR-এর সুবিধা:**  
✅ পেজ লোড **ব্লক না হয়ে** ধাপে ধাপে লোড হয়।  
✅ কম গুরুত্বপূর্ণ **কম্পোনেন্টগুলোর** লোডিং **পরে হতে পারে**।  
✅ সার্ভার **চাংক আকারে HTML পাঠাতে পারে**, ফলে লোডিং টাইম কমে।  

---

### **📌 `Suspense` এবং Streaming-এর ব্যবহার**
📂 **`page.tsx` ফাইল:**  
```tsx
import { Suspense } from "react";
import { PostFeed, Weather } from "./Components";

export default function Posts() {
  return (
    <section>
      {/* পোস্ট ফিড লোড হচ্ছে */}
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      
      {/* আবহাওয়ার তথ্য লোড হচ্ছে */}
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  );
}
```
🔹 **কী হচ্ছে?**
- **`Suspense` ব্যাবহার করে** আলাদা কম্পোনেন্ট লোড করা হচ্ছে।
- **`fallback` হিসেবে Skeleton UI, Spinner বা টেক্সট দেখানো যায়।**
- **Streaming-এর ফলে কিছু অংশ আগে দেখা যাবে, কিছু অংশ পরে লোড হবে।**

---

## **🔹 SEO এবং Performance**
✅ **SEO তে কোনো সমস্যা হবে না**, কারণ **Next.js `generateMetadata`** সম্পন্ন হওয়ার পর **প্রথম অংশটি স্ট্রিম করবে।**  
✅ **স্ট্যাটাস কোড:** স্ট্রিমিং এর ক্ষেত্রে **২০০ স্ট্যাটাস কোড** ফেরত আসবে।  
✅ **সর্বোচ্চ পারফরম্যান্স পেতে `loading.js` এবং `Suspense` ব্যবহার করুন।**  

---

এভাবে **Skeleton UI** এবং **Streaming Suspense** ব্যবহার করে **একটি সুপার ফাস্ট, SEO ফ্রেন্ডলি এবং ভালো UX প্রদান করা যায়! 🚀**
</details>


<details> 
 <summary>Next.js-এ রিডাইরেক্ট করার সম্পূর্ণ টিউটোরিয়াল </summary>

 ### Next.js-এ রিডাইরেক্ট করার সম্পূর্ণ টিউটোরিয়াল (বাংলায়)

এই টিউটোরিয়ালে আমরা Next.js-এ রিডাইরেক্ট করার বিভিন্ন পদ্ধতি শিখব। রিডাইরেক্টিং ব্যবহারকারীদের এক পৃষ্ঠা থেকে অন্য পৃষ্ঠায় নিয়ে যাওয়ার জন্য অত্যন্ত গুরুত্বপূর্ণ, বিশেষ করে যখন URL পরিবর্তন হয় বা ব্যবহারকারীর অ্যাকশনের ভিত্তিতে পৃষ্ঠা পরিবর্তন করা প্রয়োজন।

---

### ১. `redirect` ফাংশন ব্যবহার করে রিডাইরেক্ট

**কখন ব্যবহার করবেন?**  
যখন কোনো সার্ভার অ্যাকশন বা ইভেন্টের পরে ব্যবহারকারীকে অন্য পৃষ্ঠায় নিয়ে যেতে চান।

**উদাহরণ:**
ধরুন, আপনি একটি ব্লগ পোস্ট তৈরি করার পরে ব্যবহারকারীকে নতুন পোস্টের পৃষ্ঠায় নিয়ে যেতে চান।

```typescript
// app/actions.ts
'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function createPost(id: string) {
  try {
    // ডাটাবেসে পোস্ট তৈরি করুন
  } catch (error) {
    // ত্রুটি হ্যান্ডল করুন
  }

  revalidatePath('/posts') // ক্যাশে করা পোস্ট আপডেট করুন
  redirect(`/post/${id}`) // নতুন পোস্ট পৃষ্ঠায় নেভিগেট করুন
}
```

**জানার বিষয়:**
- `redirect` ডিফল্টভাবে 307 (অস্থায়ী রিডাইরেক্ট) স্ট্যাটাস কোড রিটার্ন করে।
- এটি সার্ভার কম্পোনেন্ট, সার্ভার অ্যাকশন এবং রাউট হ্যান্ডলারে ব্যবহার করা যায়।

---

### ২. `permanentRedirect` ফাংশন ব্যবহার করে স্থায়ী রিডাইরেক্ট

**কখন ব্যবহার করবেন?**  
যখন কোনো স্থায়ী পরিবর্তন হয়, যেমন ইউজারনেম পরিবর্তনের পরে প্রোফাইল URL আপডেট করা।

**উদাহরণ:**
```typescript
// app/actions.ts
'use server'

import { permanentRedirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

export async function updateUsername(username: string, formData: FormData) {
  try {
    // ডাটাবেসে ইউজারনেম আপডেট করুন
  } catch (error) {
    // ত্রুটি হ্যান্ডল করুন
  }

  revalidateTag('username') // ইউজারনেমের সকল রেফারেন্স আপডেট করুন
  permanentRedirect(`/profile/${username}`) // নতুন প্রোফাইল URL-এ নেভিগেট করুন
}
```

**জানার বিষয়:**
- `permanentRedirect` ডিফল্টভাবে 308 (স্থায়ী রিডাইরেক্ট) স্ট্যাটাস কোড রিটার্ন করে।

---

### ৩. `useRouter` হুক ব্যবহার করে ক্লায়েন্ট-সাইড রিডাইরেক্ট

**কখন ব্যবহার করবেন?**  
ক্লায়েন্ট কম্পোনেন্টে ইভেন্ট হ্যান্ডলারের ভিতরে রিডাইরেক্ট করতে।

**উদাহরণ:**
```typescript
// app/page.tsx
'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      ড্যাশবোর্ড
    </button>
  )
}
```

**জানার বিষয়:**
- প্রোগ্রাম্যাটিক নেভিগেশনের জন্য `useRouter` ব্যবহার করুন। লিঙ্কের জন্য `<Link>` কম্পোনেন্ট ব্যবহার করা ভালো।

---

### ৪. `next.config.js`-এ রিডাইরেক্ট কনফিগার করা

**কখন ব্যবহার করবেন?**  
যখন আগে থেকে জানা URL পাথ পরিবর্তন করতে চান বা বড় সংখ্যক রিডাইরেক্ট পরিচালনা করতে চান।

**উদাহরণ:**
```typescript
// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/about', // পুরানো URL
        destination: '/', // নতুন URL
        permanent: true, // স্থায়ী রিডাইরেক্ট
      },
      {
        source: '/blog/:slug', // ওয়াইল্ডকার্ড পাথ
        destination: '/news/:slug', // নতুন পাথ
        permanent: true,
      },
    ]
  },
}
```

**জানার বিষয়:**
- `permanent: true` হলে 308 (স্থায়ী রিডাইরেক্ট), `false` হলে 307 (অস্থায়ী রিডাইরেক্ট) স্ট্যাটাস কোড রিটার্ন করে।

---

### ৫. মিডলওয়্যার ব্যবহার করে রিডাইরেক্ট

**কখন ব্যবহার করবেন?**  
যখন শর্তসাপেক্ষে রিডাইরেক্ট করতে চান, যেমন অথেন্টিকেশন চেক করা।

**উদাহরণ:**
```typescript
// middleware.ts
import { NextResponse, NextRequest } from 'next/server'
import { authenticate } from 'auth-provider'

export function middleware(request: NextRequest) {
  const isAuthenticated = authenticate(request)

  // প্রমাণীকরণ করা থাকলে স্বাভাবিকভাবে চালিয়ে যান
  if (isAuthenticated) {
    return NextResponse.next()
  }

  // প্রমাণীকরণ না করা থাকলে লগইন পৃষ্ঠায় রিডাইরেক্ট করুন
  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher: '/dashboard/:path*', // শুধুমাত্র ড্যাশবোর্ডের জন্য মিডলওয়্যার প্রয়োগ
}
```

**জানার বিষয়:**
- মিডলওয়্যার `next.config.js`-এ রিডাইরেক্টের পরে এবং রেন্ডারিং এর আগে রান হয়।

---

### ৬. বড় সংখ্যক রিডাইরেক্ট পরিচালনা (এডভান্সড)

**কখন ব্যবহার করবেন?**  
যখন আপনার অ্যাপ্লিকেশনে 1000+ রিডাইরেক্ট থাকে এবং আপনি এগুলিকে দক্ষতার সাথে পরিচালনা করতে চান।

**ধাপ:**
1. একটি রিডাইরেক্ট ম্যাপ তৈরি করুন (যেমন JSON ফাইল বা ডাটাবেসে সংরক্ষণ করুন)।
2. মিডলওয়্যার এবং Bloom filter ব্যবহার করে দ্রুত লুকআপ করুন।

**উদাহরণ:**
```typescript
// middleware.ts
import { NextResponse, NextRequest } from 'next/server'
import { ScalableBloomFilter } from 'bloom-filters'
import GeneratedBloomFilter from './redirects/bloom-filter.json'

// Bloom filter ইনিশিয়ালাইজ করুন
const bloomFilter = ScalableBloomFilter.fromJSON(GeneratedBloomFilter as any)

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Bloom filter-এ পাথ আছে কিনা চেক করুন
  if (bloomFilter.has(pathname)) {
    const api = new URL(
      `/api/redirects?pathname=${encodeURIComponent(pathname)}`,
      request.nextUrl.origin
    )

    try {
      const redirectData = await fetch(api)
      if (redirectData.ok) {
        const redirectEntry = await redirectData.json()
        if (redirectEntry) {
          const statusCode = redirectEntry.permanent ? 308 : 307
          return NextResponse.redirect(redirectEntry.destination, statusCode)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  // রিডাইরেক্ট পাওয়া যায়নি, রিডাইরেক্ট ছাড়াই চালিয়ে যান
  return NextResponse.next()
}
```

**জানার বিষয়:**
- Bloom filter ব্যবহার করে আপনি দ্রুত চেক করতে পারেন যে রিডাইরেক্ট আছে কিনা।

---

### শেষ কথা

এই টিউটোরিয়ালে আমরা Next.js-এ রিডাইরেক্ট করার বিভিন্ন পদ্ধতি শিখেছি। প্রতিটি পদ্ধতির নিজস্ব ব্যবহারের ক্ষেত্র রয়েছে, তাই আপনার প্রয়োজনের ভিত্তিতে সঠিক পদ্ধতি বেছে নিন। রিডাইরেক্টিং ব্যবহার করে আপনি ব্যবহারকারীদের জন্য একটি সুবিন্যস্ত এবং দক্ষ নেভিগেশন অভিজ্ঞতা তৈরি করতে পারেন।

Happy Coding! 🚀
</details>




<details> 
 <summary>Parallel Routes: সম্পূর্ণ টিউটোরিয়াল </summary>
 ### Next.js-এ Parallel Routes: সম্পূর্ণ টিউটোরিয়াল (বাংলায়)

Parallel Routes Next.js-এর একটি শক্তিশালী ফিচার যা আপনাকে একই লেআউটে একাধিক পৃষ্ঠা একসাথে বা শর্তসাপেক্ষে রেন্ডার করতে দেয়। এটি ড্যাশবোর্ড, সোশ্যাল মিডিয়া ফিড, বা অন্যান্য ডায়নামিক সেকশন তৈরি করার জন্য অত্যন্ত উপযোগী।

এই টিউটোরিয়ালে আমরা Parallel Routes-এর ধারণা, ব্যবহারের পদ্ধতি এবং কিছু ব্যবহারিক উদাহরণ শিখব।

---

### ১. Parallel Routes কী?

Parallel Routes আপনাকে একই লেআউটে একাধিক পৃষ্ঠা (বা স্লট) একসাথে রেন্ডার করতে দেয়। প্রতিটি স্লট একটি আলাদা কম্পোনেন্ট বা পৃষ্ঠা হতে পারে, যা URL-এর সাথে সিঙ্ক্রোনাইজড থাকে।

**উদাহরণ:**  
একটি ড্যাশবোর্ডে আপনি একই সাথে `@team` এবং `@analytics` স্লট রেন্ডার করতে পারেন।

---

### ২. Parallel Routes তৈরি করা

Parallel Routes তৈরি করতে Next.js-এ `@folder` কনভেনশন ব্যবহার করা হয়। প্রতিটি স্লট একটি ফোল্ডার দ্বারা প্রতিনিধিত্ব করা হয়।

**ফাইল স্ট্রাকচার:**
```
app/
├── @analytics/
│   ├── page.tsx
├── @team/
│   ├── page.tsx
├── layout.tsx
├── page.tsx
```

**লেআউটে স্লট ব্যবহার:**
```typescript
// app/layout.tsx
export default function Layout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <>
      {children}
      {analytics}
      {team}
    </>
  );
}
```

**জানার বিষয়:**
- `children` একটি ইমপ্লিসিট স্লট, যা `@children` ফোল্ডারের সমতুল্য।
- স্লটগুলি URL স্ট্রাকচারকে প্রভাবিত করে না। উদাহরণস্বরূপ, `/@analytics/views` URL হবে `/views`।

---

### ৩. Active State এবং নেভিগেশন

Next.js স্বয়ংক্রিয়ভাবে প্রতিটি স্লটের Active State ট্র্যাক করে।

- **সফট নেভিগেশন:** ক্লায়েন্ট-সাইড নেভিগেশনে, শুধুমাত্র সংশ্লিষ্ট স্লটের কন্টেন্ট আপডেট হয়, অন্য স্লটগুলি অপরিবর্তিত থাকে।
- **হার্ড নেভিগেশন:** পৃষ্ঠা রিফ্রেশ বা ফুল-পেজ লোডে, Next.js `default.js` ফাইল ব্যবহার করে। যদি `default.js` না থাকে, তাহলে 404 দেখায়।

**উদাহরণ:**
```
app/
├── @analytics/
│   ├── default.tsx
│   ├── page-views/
│   │   ├── page.tsx
│   ├── visitors/
│   │   ├── page.tsx
```

`/page-views`-এ নেভিগেট করলে `@analytics` স্লটে `page-views` রেন্ডার হবে, এবং অন্য স্লটগুলি তাদের Active State বজায় রাখবে।

---

### ৪. `useSelectedLayoutSegment` ব্যবহার করে Active Segment পড়া

আপনি `useSelectedLayoutSegment` বা `useSelectedLayoutSegments` হুক ব্যবহার করে একটি স্লটের Active Segment পড়তে পারেন।

**উদাহরণ:**
```typescript
// app/layout.tsx
'use client'

import { useSelectedLayoutSegment } from 'next/navigation'

export default function Layout({ auth }: { auth: React.ReactNode }) {
  const loginSegment = useSelectedLayoutSegment('auth');
  return (
    <>
      {auth}
      <p>Active Segment: {loginSegment}</p>
    </>
  );
}
```

যখন ব্যবহারকারী `app/@auth/login`-এ নেভিগেট করে, `loginSegment` হবে `"login"`।

---

### ৫. শর্তসাপেক্ষ রাউট (Conditional Routes)

Parallel Routes ব্যবহার করে আপনি শর্তসাপেক্ষে রাউট রেন্ডার করতে পারেন। উদাহরণস্বরূপ, ব্যবহারকারীর রোলের ভিত্তিতে আলাদা ড্যাশবোর্ড দেখানো।

**উদাহরণ:**
```typescript
// app/dashboard/layout.tsx
import { checkUserRole } from '@/lib/auth'

export default function Layout({
  user,
  admin,
}: {
  user: React.ReactNode;
  admin: React.ReactNode;
}) {
  const role = checkUserRole();
  return role === 'admin' ? admin : user;
}
```

---

### ৬. ট্যাব গ্রুপ তৈরি করা

একটি স্লটের ভিতরে লেআউট তৈরি করে আপনি ট্যাব-ভিত্তিক নেভিগেশন তৈরি করতে পারেন।

**উদাহরণ:**
```typescript
// app/@analytics/layout.tsx
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/page-views">Page Views</Link>
        <Link href="/visitors">Visitors</Link>
      </nav>
      <div>{children}</div>
    </>
  );
}
```

---

### ৭. মোডাল তৈরি করা

Parallel Routes এবং Intercepting Routes একসাথে ব্যবহার করে আপনি ডিপ লিঙ্কিং সাপোর্ট করে এমন মোডাল তৈরি করতে পারেন।

**ধাপ:**
1. একটি `/login` রাউট তৈরি করুন যা মূল লগইন পৃষ্ঠা রেন্ডার করে।
2. `@auth` স্লটে `default.tsx` ফাইল তৈরি করুন যা `null` রিটার্ন করে।
3. `@auth/(.)login/page.tsx` ফাইলে মোডাল কম্পোনেন্ট তৈরি করুন।

**উদাহরণ:**
```typescript
// app/@auth/(.)login/page.tsx
import { Modal } from '@/app/ui/modal'
import { Login } from '@/app/ui/login'

export default function Page() {
  return (
    <Modal>
      <Login />
    </Modal>
  );
}
```

**মোডাল খোলা এবং বন্ধ করা:**
```typescript
// app/layout.tsx
import Link from 'next/link'

export default function Layout({
  auth,
  children,
}: {
  auth: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Link href="/login">Open modal</Link>
      </nav>
      <div>{auth}</div>
      <div>{children}</div>
    </>
  );
}
```

```typescript
// app/ui/modal.tsx
'use client'

import { useRouter } from 'next/navigation'

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <>
      <button onClick={() => router.back()}>Close modal</button>
      <div>{children}</div>
    </>
  );
}
```

---

### ৮. লোডিং এবং এরর UI

Parallel Routes-কে আলাদাভাবে স্ট্রিম করা যায়, যার ফলে আপনি প্রতিটি রাউটের জন্য আলাদা লোডিং এবং এরর UI তৈরি করতে পারেন।

**উদাহরণ:**
```typescript
// app/@analytics/loading.tsx
export default function Loading() {
  return <p>Loading analytics...</p>;
}
```

---

### শেষ কথা

Parallel Routes Next.js-এর একটি শক্তিশালী ফিচার যা আপনাকে ডায়নামিক এবং ইন্টারঅ্যাক্টিভ ইউজার ইন্টারফেস তৈরি করতে সাহায্য করে। এই টিউটোরিয়ালে আমরা Parallel Routes-এর বিভিন্ন দিক শিখেছি, যেমন স্লট তৈরি করা, শর্তসাপেক্ষ রাউট, মোডাল তৈরি করা এবং লোডিং/এরর UI ব্যবস্থাপনা।

এই ফিচারটি ব্যবহার করে আপনি আরও দক্ষ এবং ইউজার-ফ্রেন্ডলি অ্যাপ্লিকেশন তৈরি করতে পারবেন।

Happy Coding! 🚀
</details>
<details> 
 <summary> Intercepting Routes</summary>
 ### Next.js-এ Intercepting Routes: সম্পূর্ণ টিউটোরিয়াল (বাংলায়)

Intercepting Routes Next.js-এর একটি শক্তিশালী ফিচার যা আপনাকে বর্তমান লেআউটের মধ্যে অন্য একটি রাউটের কন্টেন্ট লোড করতে দেয়। এটি বিশেষভাবে উপযোগী যখন আপনি ব্যবহারকারীকে সম্পূর্ণ পৃষ্ঠা পরিবর্তন না করে একটি মোডাল বা ওভারলে মাধ্যমে কন্টেন্ট দেখাতে চান।

এই টিউটোরিয়ালে আমরা Intercepting Routes-এর ধারণা, ব্যবহারের পদ্ধতি এবং কিছু ব্যবহারিক উদাহরণ শিখব।

---

### ১. Intercepting Routes কী?

Intercepting Routes আপনাকে একটি রাউটের কন্টেন্ট বর্তমান লেআউটের মধ্যে লোড করতে দেয়। উদাহরণস্বরূপ, একটি ফিডে থাকা ফটো ক্লিক করলে, আপনি ফটোটি একটি মোডালে দেখাতে পারেন, যেখানে URL পরিবর্তন হয় না এবং ফিড পৃষ্ঠা ওভারলে হিসেবে থাকে।

**উদাহরণ:**
- ফিড পৃষ্ঠা: `/feed`
- ফটো পৃষ্ঠা: `/photo/123`
- মোডালে ফটো দেখানো: `/feed` পৃষ্ঠার ওভারলে হিসেবে `/photo/123` দেখানো।

---

### ২. Intercepting Routes কনভেনশন

Intercepting Routes তৈরি করতে Next.js-এ `(..)` কনভেনশন ব্যবহার করা হয়। এটি রিলেটিভ পাথের মতো কাজ করে, কিন্তু রাউট সেগমেন্টের জন্য।

**কনভেনশন:**
- `(.)`: একই লেভেলের সেগমেন্ট ম্যাচ করতে।
- `(..)`: এক লেভেল উপরের সেগমেন্ট ম্যাচ করতে।
- `(..)(..)`: দুই লেভেল উপরের সেগমেন্ট ম্যাচ করতে।
- `(...)`: রুট ডিরেক্টরি থেকে সেগমেন্ট ম্যাচ করতে।

**উদাহরণ:**
ফিড পৃষ্ঠা থেকে ফটো সেগমেন্ট ইন্টারসেপ্ট করতে:
```
app/
├── @modal/
│   ├── (..)photo/
│   │   ├── [id]/
│   │   │   ├── page.tsx
├── feed/
│   ├── page.tsx
├── photo/
│   ├── [id]/
│   │   ├── page.tsx
```

---

### ৩. মোডাল তৈরি করা

Intercepting Routes এবং Parallel Routes একসাথে ব্যবহার করে আপনি মোডাল তৈরি করতে পারেন। এটি নিম্নলিখিত চ্যালেঞ্জগুলি সমাধান করে:
- মোডাল কন্টেন্ট URL-এর মাধ্যমে শেয়ারযোগ্য করা।
- পৃষ্ঠা রিফ্রেশ করলে মোডাল বন্ধ না করে কন্টেক্সট সংরক্ষণ করা।
- ব্যাকওয়ার্ড নেভিগেশনে মোডাল বন্ধ করা।
- ফরওয়ার্ড নেভিগেশনে মোডাল পুনরায় খোলা।

**ধাপ:**
1. একটি `/photo/[id]` রাউট তৈরি করুন যা মূল ফটো পৃষ্ঠা রেন্ডার করে।
2. `@modal` স্লটে `(..)photo/[id]/page.tsx` ফাইল তৈরি করুন যা মোডালে ফটো দেখায়।

**উদাহরণ:**
```typescript
// app/photo/[id]/page.tsx
export default function PhotoPage({ params }: { params: { id: string } }) {
  return <div>Photo Page: {params.id}</div>;
}
```

```typescript
// app/@modal/(..)photo/[id]/page.tsx
import { Modal } from '@/components/modal';

export default function PhotoModal({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <div>Photo Modal: {params.id}</div>
    </Modal>
  );
}
```

**মোডাল খোলা এবং বন্ধ করা:**
```typescript
// app/feed/page.tsx
import Link from 'next/link';

export default function FeedPage() {
  return (
    <div>
      <h1>Feed Page</h1>
      <Link href="/photo/123">Open Photo Modal</Link>
    </div>
  );
}
```

```typescript
// app/@modal/default.tsx
export default function DefaultModal() {
  return null;
}
```

---

### ৪. Intercepting Routes-এর ব্যবহারিক উদাহরণ

#### উদাহরণ ১: লগইন মোডাল
একটি নেভবারে লগইন বাটন ক্লিক করলে লগইন মোডাল খুলবে, কিন্তু সরাসরি `/login` URL-এ গেলে সম্পূর্ণ লগইন পৃষ্ঠা দেখাবে।

**ফাইল স্ট্রাকচার:**
```
app/
├── @modal/
│   ├── (..)login/
│   │   ├── page.tsx
├── login/
│   ├── page.tsx
```

**কোড:**
```typescript
// app/login/page.tsx
export default function LoginPage() {
  return <div>Login Page</div>;
}
```

```typescript
// app/@modal/(..)login/page.tsx
import { Modal } from '@/components/modal';

export default function LoginModal() {
  return (
    <Modal>
      <div>Login Modal</div>
    </Modal>
  );
}
```

#### উদাহরণ ২: শপিং কার্ট মোডাল
একটি ই-কমার্স সাইটে শপিং কার্ট মোডাল তৈরি করুন, যা ওভারলে হিসেবে খুলবে।

**ফাইল স্ট্রাকচার:**
```
app/
├── @modal/
│   ├── (..)cart/
│   │   ├── page.tsx
├── cart/
│   ├── page.tsx
```

**কোড:**
```typescript
// app/cart/page.tsx
export default function CartPage() {
  return <div>Cart Page</div>;
}
```

```typescript
// app/@modal/(..)cart/page.tsx
import { Modal } from '@/components/modal';

export default function CartModal() {
  return (
    <Modal>
      <div>Cart Modal</div>
    </Modal>
  );
}
```

---

### ৫. Intercepting Routes-এর সুবিধা

- **ইউজার এক্সপেরিয়েন্স উন্নত করা:** ব্যবহারকারীকে সম্পূর্ণ পৃষ্ঠা পরিবর্তন না করে ওভারলে মাধ্যমে কন্টেন্ট দেখানো।
- **ডিপ লিঙ্কিং:** মোডাল কন্টেন্ট URL-এর মাধ্যমে শেয়ারযোগ্য।
- **কন্টেক্সট সংরক্ষণ:** পৃষ্ঠা রিফ্রেশ করলে মোডাল বন্ধ না করে কন্টেক্সট সংরক্ষণ করা।

---

### শেষ কথা

Intercepting Routes Next.js-এর একটি শক্তিশালী ফিচার যা আপনাকে আরও ইন্টারঅ্যাক্টিভ এবং ইউজার-ফ্রেন্ডলি অ্যাপ্লিকেশন তৈরি করতে সাহায্য করে। এই টিউটোরিয়ালে আমরা Intercepting Routes-এর ধারণা, কনভেনশন এবং ব্যবহারিক উদাহরণ শিখেছি।

এই ফিচারটি ব্যবহার করে আপনি মোডাল, ওভারলে এবং অন্যান্য ডায়নামিক UI কম্পোনেন্ট তৈরি করতে পারবেন।

Happy Coding! 🚀
</details>
<details> 
 <summary> Route Handlers</summary>
 ### Next.js-এ Route Handlers: সম্পূর্ণ টিউটোরিয়াল (বাংলায়)

Route Handlers Next.js-এর একটি শক্তিশালী ফিচার যা আপনাকে ওয়েব রিকোয়েস্ট এবং রেসপন্স API ব্যবহার করে কাস্টম রিকোয়েস্ট হ্যান্ডলার তৈরি করতে দেয়। এটি API রাউটের সমতুল্য, কিন্তু `app` ডিরেক্টরির মধ্যে ব্যবহার করা হয়। এই টিউটোরিয়ালে আমরা Route Handlers-এর ধারণা, ব্যবহারের পদ্ধতি এবং কিছু ব্যবহারিক উদাহরণ শিখব।

---

### ১. Route Handlers কী?

Route Handlers আপনাকে একটি নির্দিষ্ট রাউটের জন্য কাস্টম রিকোয়েস্ট হ্যান্ডলার তৈরি করতে দেয়। এটি `app` ডিরেক্টরির মধ্যে `route.js` বা `route.ts` ফাইলে সংজ্ঞায়িত করা হয়। এটি API রাউটের মতো কাজ করে, কিন্তু `pages` ডিরেক্টরির পরিবর্তে `app` ডিরেক্টরিতে ব্যবহার করা হয়।

**উদাহরণ:**
```typescript
// app/api/route.ts
export async function GET(request: Request) {
  return new Response('Hello, Next.js!');
}
```

**জানার বিষয়:**
- Route Handlers শুধুমাত্র `app` ডিরেক্টরির মধ্যে ব্যবহার করা যায়।
- `page.js` এবং `route.js` একই রাউট সেগমেন্টে থাকতে পারে না।

---

### ২. Route Handlers কনভেনশন

Route Handlers `route.js` বা `route.ts` ফাইলে সংজ্ঞায়িত করা হয় এবং `app` ডিরেক্টরির মধ্যে যেকোনো জায়গায় নেস্টেড হতে পারে।

**ফাইল স্ট্রাকচার:**
```
app/
├── api/
│   ├── route.ts
```

**উদাহরণ:**
```typescript
// app/api/route.ts
export async function GET(request: Request) {
  return new Response('Hello, Next.js!');
}
```

---

### ৩. সমর্থিত HTTP মেথড

Route Handlers নিম্নলিখিত HTTP মেথড সমর্থন করে: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, এবং `OPTIONS`। যদি একটি অসমর্থিত মেথড কল করা হয়, Next.js একটি `405 Method Not Allowed` রেসপন্স রিটার্ন করবে।

**উদাহরণ:**
```typescript
// app/api/route.ts
export async function POST(request: Request) {
  return new Response('Created!', { status: 201 });
}
```

---

### ৪. ক্যাশিং

Route Handlers ডিফল্টভাবে ক্যাশ করা হয় না। তবে `GET` মেথডের জন্য ক্যাশিং চালু করা যায়। অন্যান্য HTTP মেথড ক্যাশ করা যায় না।

**উদাহরণ:**
```typescript
// app/items/route.ts
export const dynamic = 'force-static';

export async function GET() {
  const res = await fetch('https://api.example.com/items');
  const data = await res.json();
  return Response.json({ data });
}
```

---

### ৫. কুকিজ এবং হেডার

Route Handlers-এ কুকিজ এবং হেডার পড়া এবং সেট করা যায়।

**কুকিজ পড়া:**
```typescript
// app/api/route.ts
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  return new Response('Hello, Next.js!', {
    headers: { 'Set-Cookie': `token=${token?.value}` },
  });
}
```

**হেডার পড়া:**
```typescript
// app/api/route.ts
import { headers } from 'next/headers';

export async function GET(request: Request) {
  const headersList = headers();
  const referer = headersList.get('referer');
  return new Response('Hello, Next.js!', {
    headers: { referer: referer || '' },
  });
}
```

---

### ৬. রিডাইরেক্ট

Route Handlers-এ রিডাইরেক্ট করা যায়।

**উদাহরণ:**
```typescript
// app/api/route.ts
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  redirect('https://nextjs.org/');
}
```

---

### ৭. ডায়নামিক রাউট সেগমেন্ট

Route Handlers ডায়নামিক সেগমেন্ট ব্যবহার করে ডায়নামিক ডেটা থেকে রিকোয়েস্ট হ্যান্ডলার তৈরি করতে পারে।

**উদাহরণ:**
```typescript
// app/items/[slug]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  return new Response(`Item: ${slug}`);
}
```

---

### ৮. URL কুয়েরি প্যারামিটার

Route Handlers-এ URL কুয়েরি প্যারামিটার পড়া যায়।

**উদাহরণ:**
```typescript
// app/api/search/route.ts
import { type NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  return new Response(`Search Query: ${query}`);
}
```

---

### ৯. স্ট্রিমিং

Route Handlers-এ স্ট্রিমিং ব্যবহার করে বড় ডেটা স্ট্রিম করা যায়।

**উদাহরণ:**
```typescript
// app/api/chat/route.ts
import { StreamingTextResponse, streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = await streamText({
    model: 'gpt-4',
    messages,
  });
  return new StreamingTextResponse(result.toAIStream());
}
```

---

### ১০. রিকোয়েস্ট বডি

Route Handlers-এ রিকোয়েস্ট বডি পড়া যায়।

**উদাহরণ:**
```typescript
// app/items/route.ts
export async function POST(request: Request) {
  const res = await request.json();
  return Response.json({ res });
}
```

---

### ১১. CORS

Route Handlers-এ CORS হেডার সেট করা যায়।

**উদাহরণ:**
```typescript
// app/api/route.ts
export async function GET(request: Request) {
  return new Response('Hello, Next.js!', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
```

---

### ১২. ওয়েবহুক

Route Handlers ব্যবহার করে তৃতীয়-পক্ষ সার্ভিস থেকে ওয়েবহুক রিসিভ করা যায়।

**উদাহরণ:**
```typescript
// app/api/route.ts
export async function POST(request: Request) {
  try {
    const text = await request.text();
    // ওয়েবহুক পেলোড প্রসেস করুন
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }
  return new Response('Success!', { status: 200 });
}
```

---

### ১৩. নন-UI রেসপন্স

Route Handlers ব্যবহার করে নন-UI কন্টেন্ট রিটার্ন করা যায়, যেমন RSS ফিড, robots.txt, ইত্যাদি।

**উদাহরণ:**
```typescript
// app/rss.xml/route.ts
export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Next.js Documentation</title>
  <link>https://nextjs.org/docs</link>
  <description>The React Framework for the Web</description>
</channel>
</rss>`,
    {
      headers: {
        'Content-Type': 'text/xml',
      },
    }
  );
}
```

---

### শেষ কথা

Route Handlers Next.js-এর একটি শক্তিশালী ফিচার যা আপনাকে কাস্টম API এন্ডপয়েন্ট তৈরি করতে এবং বিভিন্ন HTTP মেথড হ্যান্ডল করতে সাহায্য করে। এই টিউটোরিয়ালে আমরা Route Handlers-এর বিভিন্ন দিক শিখেছি, যেমন কুকিজ এবং হেডার ম্যানিপুলেশন, রিডাইরেক্ট, ডায়নামিক রাউট সেগমেন্ট, স্ট্রিমিং, এবং ওয়েবহুক।

এই ফিচারটি ব্যবহার করে আপনি আরও দক্ষ এবং স্কেলেবল API তৈরি করতে পারবেন।

Happy Coding! 🚀
</details>
<details> 
 <summary>Middleware </summary>
 ### Next.js-এ Middleware: সম্পূর্ণ টিউটোরিয়াল (বাংলায়)

Middleware Next.js-এর একটি শক্তিশালী ফিচার যা আপনাকে রিকোয়েস্ট সম্পূর্ণ হওয়ার আগে কোড রান করতে দেয়। এর মাধ্যমে আপনি রিকোয়েস্ট বা রেসপন্স হেডার মডিফাই করতে পারেন, রিডাইরেক্ট বা রিরাইট করতে পারেন, বা সরাসরি রেসপন্স দিতে পারেন। Middleware ক্যাশড কন্টেন্ট এবং রাউট ম্যাচ হওয়ার আগে রান হয়।

এই টিউটোরিয়ালে আমরা Middleware-এর ধারণা, ব্যবহারের পদ্ধতি এবং কিছু ব্যবহারিক উদাহরণ শিখব।

---

### ১. Middleware কী?

Middleware আপনাকে রিকোয়েস্ট সম্পূর্ণ হওয়ার আগে কোড রান করতে দেয়। এটি ব্যবহার করে আপনি:

- **অথেন্টিকেশন এবং অথরাইজেশন:** ব্যবহারকারীর আইডেন্টিটি যাচাই করে সেশন কুকি চেক করতে পারেন।
- **সার্ভার-সাইড রিডাইরেক্ট:** নির্দিষ্ট শর্তের ভিত্তিতে ব্যবহারকারীকে রিডাইরেক্ট করতে পারেন (যেমন: লোকেল, ব্যবহারকারীর রোল)।
- **পাথ রিরাইট:** A/B টেস্টিং, ফিচার রোলআউট, বা লেগেসি পাথ সাপোর্ট করতে পারেন।
- **বট ডিটেকশন:** বট ট্রাফিক ডিটেক্ট এবং ব্লক করতে পারেন।
- **লগিং এবং অ্যানালিটিক্স:** রিকোয়েস্ট ডেটা ক্যাপচার এবং অ্যানালাইজ করতে পারেন।

---

### ২. Middleware কনভেনশন

Middleware তৈরি করতে `middleware.ts` বা `middleware.js` ফাইল ব্যবহার করুন। এটি প্রজেক্টের রুটে বা `src` ডিরেক্টরিতে রাখুন।

**উদাহরণ:**
```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url));
}

export const config = {
  matcher: '/about/:path*',
};
```

---

### ৩. Middleware ম্যাচিং পাথ

Middleware প্রজেক্টের প্রতিটি রাউটে রান হতে পারে। তবে `matcher` ব্যবহার করে নির্দিষ্ট রাউটে Middleware চালানো যায়।

**উদাহরণ:**
```typescript
// middleware.ts
export const config = {
  matcher: '/about/:path*',
};
```

**মাল্টিপল পাথ ম্যাচিং:**
```typescript
export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
};
```

**নেগেটিভ লুকআহেড:**
```typescript
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
```

---

### ৪. Middleware ব্যবহারের উদাহরণ

#### উদাহরণ ১: অথেন্টিকেশন
```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
};
```

#### উদাহরণ ২: পাথ রিরাইট
```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url));
  }

  return NextResponse.next();
}
```

#### উদাহরণ ৩: কুকিজ ম্যানিপুলেশন
```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.cookies.set('vercel', 'fast');
  return response;
}
```

#### উদাহরণ ৪: হেডার সেট করা
```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-hello-from-middleware', 'hello');

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('x-hello-from-middleware2', 'hello');
  return response;
}
```

#### উদাহরণ ৫: CORS হেডার সেট করা
```typescript
// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const allowedOrigins = ['https://acme.com', 'https://my-app.org'];

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin') ?? '';
  const isAllowedOrigin = allowedOrigins.includes(origin);

  if (request.method === 'OPTIONS') {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    };
    return NextResponse.json({}, { headers: preflightHeaders });
  }

  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
```

---

### ৫. Middleware-এ রেসপন্স তৈরি করা

Middleware থেকে সরাসরি রেসপন্স তৈরি করা যায়।

**উদাহরণ:**
```typescript
// middleware.ts
import type { NextRequest } from 'next/server';
import { isAuthenticated } from '@lib/auth';

export function middleware(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return Response.json(
      { success: false, message: 'authentication failed' },
      { status: 401 }
    );
  }
}
```

---

### ৬. Advanced Middleware Flags

Next.js v13.1 থেকে দুটি অ্যাডভান্সড ফ্ল্যাগ যুক্ত হয়েছে:

- **skipTrailingSlashRedirect:** ট্রেইলিং স্ল্যাশ রিডাইরেক্ট ডিসেবল করে।
- **skipMiddlewareUrlNormalize:** URL নরমালাইজেশন ডিসেবল করে।

**উদাহরণ:**
```javascript
// next.config.js
module.exports = {
  skipTrailingSlashRedirect: true,
};
```

```javascript
// middleware.js
const legacyPrefixes = ['/docs', '/blog'];

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (legacyPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  if (!pathname.endsWith('/')) {
    return NextResponse.redirect(new URL(`${req.nextUrl.pathname}/`, req.nextUrl));
  }
}
```

---

### ৭. Middleware টেস্টিং (এক্সপেরিমেন্টাল)

Next.js 15.1 থেকে Middleware ইউনিট টেস্টিং সাপোর্ট করে।

**উদাহরণ:**
```typescript
import { unstable_doesMiddlewareMatch } from 'next/experimental/testing/server';

expect(
  unstable_doesMiddlewareMatch({
    config,
    nextConfig,
    url: '/test',
  })
).toEqual(false);
```

---

### ৮. Middleware রানটাইম

Middleware ডিফল্টভাবে Edge রানটাইম ব্যবহার করে। Next.js v15.2 (ক্যানারি) থেকে Node.js রানটাইম সাপোর্ট করা হয় (এক্সপেরিমেন্টাল)।

**কনফিগারেশন:**
```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    nodeMiddleware: true,
  },
};

export default nextConfig;
```

```typescript
// middleware.ts
export const config = {
  runtime: 'nodejs',
};
```

---

### শেষ কথা

Middleware Next.js-এর একটি শক্তিশালী ফিচার যা আপনাকে রিকোয়েস্ট এবং রেসপন্স ম্যানিপুলেট করতে দেয়। এই টিউটোরিয়ালে আমরা Middleware-এর বিভিন্ন দিক শিখেছি, যেমন অথেন্টিকেশন, পাথ রিরাইট, কুকিজ ম্যানিপুলেশন, CORS হেডার সেট করা, এবং টেস্টিং।

এই ফিচারটি ব্যবহার করে আপনি আরও দক্ষ এবং সুরক্ষিত অ্যাপ্লিকেশন তৈরি করতে পারবেন।

Happy Coding! 🚀
</details>
<details> 
 <summary> Internationalization </summary>
 ### Next.js-এ ইন্টারন্যাশনালাইজেশন (i18n): সম্পূর্ণ টিউটোরিয়াল (বাংলায়)

ইন্টারন্যাশনালাইজেশন (i18n) হল আপনার ওয়েবসাইটকে একাধিক ভাষা এবং লোকেল সাপোর্ট করার প্রক্রিয়া। Next.js-এ আপনি রাউটিং এবং কন্টেন্ট রেন্ডারিং কনফিগার করে সহজেই মাল্টি-ল্যাঙ্গুয়েজ সাপোর্ট যোগ করতে পারেন। এই টিউটোরিয়ালে আমরা Next.js-এ ইন্টারন্যাশনালাইজেশন বাস্তবায়নের ধাপগুলি শিখব।

---

### ১. ইন্টারন্যাশনালাইজেশন কী?

ইন্টারন্যাশনালাইজেশন হল আপনার অ্যাপ্লিকেশনকে বিভিন্ন ভাষা এবং লোকেল সাপোর্ট করার প্রক্রিয়া। এটি দুটি প্রধান অংশ নিয়ে গঠিত:

1. **লোকেল:** ভাষা এবং ফরম্যাটিং পছন্দের জন্য একটি আইডেন্টিফায়ার। যেমন: `en-US` (ইংরেজি, যুক্তরাষ্ট্র), `nl-NL` (ডাচ, নেদারল্যান্ডস)।
2. **লোকালাইজেশন:** ব্যবহারকারীর ভাষা পছন্দ অনুযায়ী কন্টেন্ট প্রদর্শন করা।

---

### ২. রাউটিং কনফিগারেশন

Next.js-এ ইন্টারন্যাশনালাইজড রাউটিং দুটি উপায়ে করা যায়:

1. **সাব-পাথ:** যেমন `/en/products` বা `/nl/products`।
2. **ডোমেইন:** যেমন `my-site.fr/products` বা `my-site.nl/products`।

**মিডলওয়্যার ব্যবহার করে লোকেল রিডাইরেক্ট:**

```typescript
// middleware.ts
import { NextResponse } from 'next/server';

const locales = ['en', 'nl']; // সমর্থিত লোকেল
const defaultLocale = 'en'; // ডিফল্ট লোকেল

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // চেক করুন পাথনেমে কোনো লোকেল আছে কিনা
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // লোকেল রিডাইরেক্ট করুন
  const locale = getLocale(request); // ব্যবহারকারীর পছন্দ অনুযায়ী লোকেল নির্বাচন করুন
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // সব ইন্টারনাল পাথ (_next) স্কিপ করুন
    '/((?!_next).*)',
  ],
};
```

**লোকেল নির্বাচন ফাংশন:**

```typescript
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string {
  const headers = { 'accept-language': request.headers.get('accept-language') || 'en' };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}
```

---

### ৩. লোকালাইজেশন (কন্টেন্ট ট্রান্সলেশন)

লোকালাইজেশন হল ব্যবহারকারীর ভাষা পছন্দ অনুযায়ী কন্টেন্ট প্রদর্শন করা। এটি করার জন্য আমরা ডিকশনারি (শব্দকোষ) ব্যবহার করব।

**ডিকশনারি ফাইল:**

```json
// dictionaries/en.json
{
  "products": {
    "cart": "Add to Cart"
  }
}
```

```json
// dictionaries/nl.json
{
  "products": {
    "cart": "Toevoegen aan Winkelwagen"
  }
}
```

**ডিকশনারি লোড করার ফাংশন:**

```typescript
// app/[lang]/dictionaries.ts
import 'server-only';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  nl: () => import('./dictionaries/nl.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'nl') => dictionaries[locale]();
```

**পৃষ্ঠায় ডিকশনারি ব্যবহার:**

```typescript
// app/[lang]/page.tsx
import { getDictionary } from './dictionaries';

export default async function Page({
  params,
}: {
  params: { lang: 'en' | 'nl' };
}) {
  const dict = await getDictionary(params.lang); // লোকেল অনুযায়ী ডিকশনারি লোড করুন
  return <button>{dict.products.cart}</button>; // ট্রান্সলেটেড কন্টেন্ট প্রদর্শন করুন
}
```

---

### ৪. স্ট্যাটিক জেনারেশন

স্ট্যাটিক রাউট জেনারেট করার জন্য `generateStaticParams` ব্যবহার করুন। এটি লোকেল অনুযায়ী স্ট্যাটিক পাথ তৈরি করে।

**উদাহরণ:**

```typescript
// app/[lang]/layout.tsx
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'nl' }]; // সমর্থিত লোকেলগুলির জন্য স্ট্যাটিক পাথ তৈরি করুন
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: 'en' | 'nl' };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
```

---

### ৫. লোকেল স্যুইচিং

লোকেল স্যুইচ করার জন্য একটি ভাষা স্যুইচার কম্পোনেন্ট তৈরি করুন।

**উদাহরণ:**

```typescript
// components/LocaleSwitcher.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  return (
    <div>
      {locales?.map((locale) => (
        <Link key={locale} href={router.asPath} locale={locale}>
          <a style={{ fontWeight: locale === activeLocale ? 'bold' : 'normal' }}>
            {locale}
          </a>
        </Link>
      ))}
    </div>
  );
}
```

---

### ৬. সম্পূর্ণ উদাহরণ

**ফাইল স্ট্রাকচার:**
```
app/
├── [lang]/
│   ├── dictionaries/
│   │   ├── en.json
│   │   ├── nl.json
│   ├── layout.tsx
│   ├── page.tsx
├── middleware.ts
```

**middleware.ts:**
```typescript
import { NextResponse, type NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'nl'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  const headers = { 'accept-language': request.headers.get('accept-language') || 'en' };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next).*)'],
};
```

**app/[lang]/layout.tsx:**
```typescript
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'nl' }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: 'en' | 'nl' };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
```

**app/[lang]/page.tsx:**
```typescript
import { getDictionary } from './dictionaries';

export default async function Page({
  params,
}: {
  params: { lang: 'en' | 'nl' };
}) {
  const dict = await getDictionary(params.lang);
  return <button>{dict.products.cart}</button>;
}
```

---

### শেষ কথা

Next.js-এ ইন্টারন্যাশনালাইজেশন বাস্তবায়ন করা খুবই সহজ এবং শক্তিশালী। এই টিউটোরিয়ালে আমরা লোকেল রিডাইরেক্ট, কন্টেন্ট ট্রান্সলেশন, স্ট্যাটিক জেনারেশন, এবং লোকেল স্যুইচিং শিখেছি। এই ফিচারগুলি ব্যবহার করে আপনি আপনার ওয়েবসাইটকে গ্লোবাল অডিয়েন্সের জন্য প্রস্তুত করতে পারেন।

Happy Coding! 🚀
</details>
<details> 
 <summary>Data Fetching and Caching </summary>

 এই টিউটোরিয়ালে আমরা **Next.js**-এ **ডেটা ফেচিং** এবং **ক্যাশিং** সম্পর্কে শিখব। আমরা প্র্যাকটিকাল উদাহরণ এবং সেরা প্র্যাকটিসগুলো দেখব। এছাড়াও, আমরা **Parallel এবং Sequential ডেটা ফেচিং**, **Preloading ডেটা**, এবং **ক্যাশিং** সম্পর্কে বিস্তারিত আলোচনা করব।

---

## টিউটোরিয়াল: Next.js-এ ডেটা ফেচিং এবং ক্যাশিং

### ধাপ ১: বেসিক ডেটা ফেচিং

Next.js-এ ডেটা ফেচিং করার জন্য আমরা `fetch` API ব্যবহার করতে পারি। নিচের উদাহরণে আমরা একটি ব্লগ পোস্টের লিস্ট ফেচ করব এবং তা ডিসপ্লে করব।

#### উদাহরণ: `app/page.tsx`

```typescript
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog');
  const posts = await data.json();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

**ব্যাখ্যা:**
- `fetch` API ব্যবহার করে আমরা ডেটা ফেচ করছি।
- ডেটা ফেচ করার পর তা JSON ফরম্যাটে কনভার্ট করে ডিসপ্লে করছি।

---

### ধাপ ২: ডেটা ক্যাশিং

Next.js-এ ডেটা ক্যাশিং করার জন্য আমরা `unstable_cache` API ব্যবহার করতে পারি। এটি ডেটা ক্যাশ করে এবং নির্দিষ্ট সময় পর রি-ভ্যালিডেট করে।

#### উদাহরণ: `app/page.tsx`

```typescript
import { unstable_cache } from 'next/cache';
import { db, posts } from '@/lib/db';

const getPosts = unstable_cache(
  async () => {
    return await db.select().from(posts);
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
);

export default async function Page() {
  const allPosts = await getPosts();

  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

**ব্যাখ্যা:**
- `unstable_cache` ব্যবহার করে আমরা ডেটাবেস ক্যোয়ারী ক্যাশ করছি।
- `revalidate: 3600` বলছে যে ডেটা ১ ঘন্টা পর রি-ভ্যালিডেট হবে।
- `tags: ['posts']` ব্যবহার করে আমরা ক্যাশ ট্যাগ যোগ করছি, যা পরে রি-ভ্যালিডেট করতে সাহায্য করবে।

---

### ধাপ ৩: Parallel এবং Sequential ডেটা ফেচিং

#### Sequential ডেটা ফেচিং

Sequential ডেটা ফেচিং-এ একটি রিকোয়েস্ট শেষ হওয়ার পর পরের রিকোয়েস্ট শুরু হয়। এটি তখন ব্যবহার করা হয় যখন একটি রিকোয়েস্ট অন্যটির উপর নির্ভর করে।

#### উদাহরণ: `app/artist/[username]/page.tsx`

```typescript
export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  const artist = await getArtist(username);

  return (
    <>
      <h1>{artist.name}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Playlists artistID={artist.id} />
      </Suspense>
    </>
  );
}

async function Playlists({ artistID }: { artistID: string }) {
  const playlists = await getArtistPlaylists(artistID);

  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  );
}
```

**ব্যাখ্যা:**
- প্রথমে `getArtist` রিকোয়েস্ট শেষ হওয়ার পর `getArtistPlaylists` রিকোয়েস্ট শুরু হয়।
- `Suspense` ব্যবহার করে আমরা লোডিং স্টেট দেখাচ্ছি।

---

#### Parallel ডেটা ফেচিং

Parallel ডেটা ফেচিং-এ একই সাথে একাধিক রিকোয়েস্ট শুরু হয়, যা লোডিং টাইম কমাতে সাহায্য করে।

#### উদাহরণ: `app/artist/[username]/page.tsx`

```typescript
import Albums from './albums';

async function getArtist(username: string) {
  const res = await fetch(`https://api.example.com/artist/${username}`);
  return res.json();
}

async function getAlbums(username: string) {
  const res = await fetch(`https://api.example.com/artist/${username}/albums`);
  return res.json();
}

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  const artistData = getArtist(username);
  const albumsData = getAlbums(username);

  const [artist, albums] = await Promise.all([artistData, albumsData]);

  return (
    <>
      <h1>{artist.name}</h1>
      <Albums list={albums} />
    </>
  );
}
```

**ব্যাখ্যা:**
- `Promise.all` ব্যবহার করে আমরা একই সাথে `getArtist` এবং `getAlbums` রিকোয়েস্ট শুরু করছি।
- দুটি রিকোয়েস্ট একই সাথে সম্পন্ন হলে ডেটা ডিসপ্লে করছি।

---

### ধাপ ৪: Preloading ডেটা

Preloading ডেটা ব্যবহার করে আমরা রিকোয়েস্ট ওয়াটারফল এড়াতে পারি। এটি ডেটা ফেচিংকে আরও দ্রুত করে তোলে।

#### উদাহরণ: `components/Item.tsx`

```typescript
import { getItem } from '@/utils/get-item';

export const preload = (id: string) => {
  void getItem(id);
};

export default async function Item({ id }: { id: string }) {
  const result = await getItem(id);
  return <div>{result.name}</div>;
}
```

#### উদাহরণ: `app/item/[id]/page.tsx`

```typescript
import Item, { preload, checkIsAvailable } from '@/components/Item';

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  preload(id); // Preload data
  const isAvailable = await checkIsAvailable();

  return isAvailable ? <Item id={id} /> : null;
}
```

**ব্যাখ্যা:**
- `preload` ফাংশন ব্যবহার করে আমরা ডেটা ফেচিং শুরু করছি।
- `checkIsAvailable` ফাংশন চালানোর সময় ডেটা ইতিমধ্যে ফেচ হয়ে যায়।

---

### ধাপ ৫: ক্যাশিং এবং রি-ভ্যালিডেশন

Next.js-এ ক্যাশিং এবং রি-ভ্যালিডেশন করার জন্য আমরা `unstable_cache` এবং `revalidate` ব্যবহার করতে পারি।

#### উদাহরণ: `app/page.tsx`

```typescript
import { unstable_cache } from 'next/cache';
import { db, posts } from '@/lib/db';

const getPosts = unstable_cache(
  async () => {
    return await db.select().from(posts);
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
);

export default async function Page() {
  const allPosts = await getPosts();

  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

**ব্যাখ্যা:**
- `unstable_cache` ব্যবহার করে আমরা ডেটা ক্যাশ করছি।
- `revalidate: 3600` বলছে যে ডেটা ১ ঘন্টা পর রি-ভ্যালিডেট হবে।

---

### ধাপ ৬: সেনসিটিভ ডেটা সুরক্ষা

Next.js-এ সেনসিটিভ ডেটা ক্লায়েন্টে পাঠানো থেকে রক্ষা করতে আমরা React-এর `taint` API ব্যবহার করতে পারি।

#### উদাহরণ: `app/utils.ts`

```typescript
import { queryDataFromDB } from './api';
import {
  experimental_taintObjectReference,
  experimental_taintUniqueValue,
} from 'react';

export async function getUserData() {
  const data = await queryDataFromDB();
  experimental_taintObjectReference(
    'Do not pass the whole user object to the client',
    data
  );
  experimental_taintUniqueValue(
    "Do not pass the user's address to the client",
    data,
    data.address
  );
  return data;
}
```

**ব্যাখ্যা:**
- `taintObjectReference` এবং `taintUniqueValue` ব্যবহার করে আমরা সেনসিটিভ ডেটা ক্লায়েন্টে পাঠানো থেকে রক্ষা করছি।

---

এই টিউটোরিয়ালে আমরা Next.js-এ ডেটা ফেচিং, ক্যাশিং, Parallel এবং Sequential ডেটা ফেচিং, Preloading ডেটা, এবং সেনসিটিভ ডেটা সুরক্ষা সম্পর্কে শিখলাম। এই কৌশলগুলো ব্যবহার করে আপনি আরও দক্ষ এবং স্কেলেবল Next.js অ্যাপ্লিকেশন তৈরি করতে পারবেন। 😊
</details>
<details> 
 <summary> Server Actions এবং Mutations </summary>
### **Next.js-এ Server Actions এবং Mutations: সম্পূর্ণ গাইড**

Server Actions এবং Mutations হল Next.js-এর শক্তিশালী ফিচার, যা সার্ভার-সাইডে ডেটা মিউটেশন (যেমন: ফর্ম সাবমিশন, ডেটা আপডেট) হ্যান্ডেল করার জন্য ব্যবহৃত হয়। এই গাইডে আমরা বিস্তারিতভাবে শিখব কিভাবে Server Actions ব্যবহার করে ফর্ম সাবমিশন, ডেটা মিউটেশন, এবং অন্যান্য অপারেশন হ্যান্ডেল করতে হয়।

---

### **Server Actions কি এবং কেন ব্যবহার করবেন?**

#### **Server Actions কি?**
Server Actions হল অ্যাসিনক্রোনাস ফাংশন যা সার্ভার-সাইডে এক্সিকিউট হয়। এগুলি Server এবং Client Components থেকে কল করা যায় এবং ফর্ম সাবমিশন, ডেটা মিউটেশন, এবং অন্যান্য সার্ভার-সাইড অপারেশন হ্যান্ডেল করার জন্য ব্যবহৃত হয়।

#### **কেন ব্যবহার করবেন?**
1. **সার্ভার-সাইড লজিক**: সার্ভার-সাইডে ডেটা মিউটেশন এবং ফর্ম সাবমিশন হ্যান্ডেল করা যায়।
2. **সিকিউরিটি**: সেনসিটিভ ডেটা ক্লায়েন্টে পাঠানো থেকে রক্ষা করা যায়।
3. **পারফরম্যান্স**: সার্ভার-সাইডে ডেটা প্রসেসিং করে ক্লায়েন্টের লোড কমায়।
4. **ক্যাশিং এবং রি-ভ্যালিডেশন**: Next.js ক্যাশিং এবং রি-ভ্যালিডেশন সিস্টেমের সাথে ইন্টিগ্রেট করা যায়।

---

### **কিভাবে Server Actions ব্যবহার করবেন?**

#### **ধাপ ১: Server Action তৈরি করুন**

1. **Server Component-এ Inline Server Action**:
   ```typescript
   export default function Page() {
     // Server Action
     async function create() {
       'use server';
       // ডেটা মিউটেশন করুন
     }

     return (
       <form action={create}>
         <input type="text" name="name" />
         <button type="submit">Submit</button>
       </form>
     );
   }
   ```

2. **Client Component-এ Server Action ব্যবহার**:
   - একটি আলাদা ফাইল তৈরি করুন (`app/actions.ts`) এবং `use server` ডাইরেক্টিভ যোগ করুন:
     ```typescript
     'use server';

     export async function create() {
       // ডেটা মিউটেশন করুন
     }
     ```
   - Client Component থেকে Server Action কল করুন:
     ```typescript
     'use client';

     import { create } from './actions';

     export function Button() {
       return <button onClick={() => create()}>Create</button>;
     }
     ```

---

#### **ধাপ ২: ফর্ম সাবমিশন হ্যান্ডেল করুন**

1. **ফর্ম ডেটা প্রসেসিং**:
   ```typescript
   export default function Page() {
     async function createInvoice(formData: FormData) {
       'use server';

       const rawFormData = {
         customerId: formData.get('customerId'),
         amount: formData.get('amount'),
         status: formData.get('status'),
       };

       // ডেটা মিউটেশন করুন
       // ক্যাশ রি-ভ্যালিডেট করুন
     }

     return (
       <form action={createInvoice}>
         <input type="text" name="customerId" />
         <input type="number" name="amount" />
         <input type="text" name="status" />
         <button type="submit">Submit</button>
       </form>
     );
   }
   ```

2. **অতিরিক্ত আর্গুমেন্ট পাস করুন**:
   ```typescript
   'use client';

   import { updateUser } from './actions';

   export function UserProfile({ userId }: { userId: string }) {
     const updateUserWithId = updateUser.bind(null, userId);

     return (
       <form action={updateUserWithId}>
         <input type="text" name="name" />
         <button type="submit">Update User Name</button>
       </form>
     );
   }
   ```

---

#### **ধাপ ৩: ডেটা ভ্যালিডেশন এবং এরর হ্যান্ডেলিং**

1. **সার্ভার-সাইড ভ্যালিডেশন**:
   ```typescript
   'use server';

   import { z } from 'zod';

   const schema = z.object({
     email: z.string().email('Invalid Email'),
   });

   export async function createUser(formData: FormData) {
     const validatedFields = schema.safeParse({
       email: formData.get('email'),
     });

     if (!validatedFields.success) {
       return { errors: validatedFields.error.flatten().fieldErrors };
     }

     // ডেটা মিউটেশন করুন
   }
   ```

2. **এরর মেসেজ ডিসপ্লে**:
   ```typescript
   'use client';

   import { useActionState } from 'react';
   import { createUser } from '@/app/actions';

   const initialState = { message: '' };

   export function Signup() {
     const [state, formAction] = useActionState(createUser, initialState);

     return (
       <form action={formAction}>
         <input type="text" name="email" required />
         <p aria-live="polite">{state?.errors?.email}</p>
         <button type="submit">Sign up</button>
       </form>
     );
   }
   ```

---

#### **ধাপ ৪: ক্যাশিং এবং রি-ভ্যালিডেশন**

1. **ক্যাশ রি-ভ্যালিডেট করুন**:
   ```typescript
   'use server';

   import { revalidatePath } from 'next/cache';

   export async function createPost() {
     // ডেটা মিউটেশন করুন
     revalidatePath('/posts');
   }
   ```

2. **ক্যাশ ট্যাগ ব্যবহার করে রি-ভ্যালিডেট করুন**:
   ```typescript
   'use server';

   import { revalidateTag } from 'next/cache';

   export async function createPost() {
     // ডেটা মিউটেশন করুন
     revalidateTag('posts');
   }
   ```

---

#### **ধাপ ৫: রিডাইরেক্ট এবং কুকিজ ম্যানেজমেন্ট**

1. **রিডাইরেক্ট করুন**:
   ```typescript
   'use server';

   import { redirect } from 'next/navigation';

   export async function createPost() {
     // ডেটা মিউটেশন করুন
     redirect('/dashboard');
   }
   ```

2. **কুকিজ ম্যানেজ করুন**:
   ```typescript
   'use server';

   import { cookies } from 'next/headers';

   export async function exampleAction() {
     const cookieStore = cookies();
     cookieStore.set('name', 'Delba');
     cookieStore.delete('name');
   }
   ```

---

### **সিকিউরিটি এবং বেস্ট প্র্যাকটিস**

1. **অথেন্টিকেশন এবং অথোরাইজেশন**:
   ```typescript
   'use server';

   import { auth } from './lib';

   export function addItem() {
     const { user } = auth();
     if (!user) {
       throw new Error('You must be signed in to perform this action');
     }

     // ডেটা মিউটেশন করুন
   }
   ```

2. **সেনসিটিভ ডেটা এনক্রিপশন**:
   - Next.js স্বয়ংক্রিয়ভাবে Server Actions-এ ব্যবহৃত ডেটা এনক্রিপ্ট করে।

---

### **উপসংহার**

এই টিউটোরিয়ালে আমরা Next.js-এ Server Actions এবং Mutations ব্যবহার করে কিভাবে ফর্ম সাবমিশন, ডেটা মিউটেশন, এবং অন্যান্য সার্ভার-সাইড অপারেশন হ্যান্ডেল করতে হয় তা শিখলাম। এই কৌশলগুলো ব্যবহার করে আপনি আরও দক্ষ এবং সিকিউর Next.js অ্যাপ্লিকেশন তৈরি করতে পারবেন। 😊
</details>
<details> 
 <summary> Incremental Static Regeneration (ISR) </summary>
 ### **Incremental Static Regeneration (ISR): সম্পূর্ণ গাইড**

Incremental Static Regeneration (ISR) হল Next.js-এর একটি শক্তিশালী ফিচার, যা স্ট্যাটিক কন্টেন্ট আপডেট এবং ক্যাশিং ম্যানেজমেন্টকে সহজ করে তোলে। এটি ব্যবহার করে আপনি সাইটের পুরো রিবিল্ড না করেই স্ট্যাটিক কন্টেন্ট আপডেট করতে পারবেন, সার্ভার লোড কমাতে পারবেন, এবং বড় সাইটগুলোর জন্য দ্রুত লোডিং টাইম নিশ্চিত করতে পারবেন।

---

### **ISR এর সুবিধা:**

1. **স্ট্যাটিক কন্টেন্ট আপডেট**: পুরো সাইট রিবিল্ড না করেই নির্দিষ্ট পেজ আপডেট করা যায়।
2. **সার্ভার লোড কমানো**: প্রি-রেন্ডার্ড স্ট্যাটিক পেজ সার্ভ করা যায়, যা সার্ভার লোড কমায়।
3. **ক্যাশিং**: স্বয়ংক্রিয়ভাবে ক্যাশ-কন্ট্রোল হেডার যোগ করা হয়।
4. **বড় সাইট ম্যানেজমেন্ট**: বড় সাইটগুলোর জন্য দ্রুত বিল্ড টাইম নিশ্চিত করে।

---

### **ISR কিভাবে কাজ করে?**

1. **বিল্ড টাইমে স্ট্যাটিক জেনারেশন**: `next build` চলাকালীন নির্দিষ্ট পেজ প্রি-রেন্ডার করা হয়।
2. **রিকোয়েস্ট টাইমে আপডেট**: নির্দিষ্ট সময় পর বা অন-ডিমান্ড রিকোয়েস্টে পেজ আপডেট করা হয়।
3. **ব্যাকগ্রাউন্ড জেনারেশন**: নতুন পেজ জেনারেশন ব্যাকগ্রাউন্ডে হয়, এবং পুরানো ক্যাশড পেজ ইউজারকে দেখানো হয়।

---

### **ISR ব্যবহারের উদাহরণ:**

#### **ধাপ ১: টাইম-বেসড রি-ভ্যালিডেশন**

এই উদাহরণে, আমরা একটি ব্লগ পোস্টের লিস্ট দেখাব এবং প্রতি ১ ঘন্টা পর ক্যাশ আপডেট করব।

```typescript
// app/blog/page.tsx
interface Post {
  id: string;
  title: string;
  content: string;
}

export const revalidate = 3600; // প্রতি ১ ঘন্টা পর ক্যাশ আপডেট

export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog');
  const posts: Post[] = await data.json();

  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
```

**ব্যাখ্যা:**
- `revalidate = 3600`: প্রতি ১ ঘন্টা পর ক্যাশ আপডেট হবে।
- `fetch` ব্যবহার করে ডেটা ফেচ করা হচ্ছে।

---

#### **ধাপ ২: অন-ডিমান্ড রি-ভ্যালিডেশন**

এই উদাহরণে, আমরা একটি নতুন পোস্ট যোগ করার পর নির্দিষ্ট পেজের ক্যাশ আপডেট করব।

```typescript
// app/actions.ts
'use server';

import { revalidatePath } from 'next/cache';

export async function createPost() {
  // নতুন পোস্ট যোগ করার লজিক
  revalidatePath('/posts'); // /posts রুটের ক্যাশ আপডেট
}
```

**ব্যাখ্যা:**
- `revalidatePath('/posts')`: `/posts` রুটের ক্যাশ আপডেট হবে।

---

#### **ধাপ ৩: ক্যাশ ট্যাগ ব্যবহার করে রি-ভ্যালিডেশন**

এই উদাহরণে, আমরা ক্যাশ ট্যাগ ব্যবহার করে নির্দিষ্ট ডেটা আপডেট করব।

```typescript
// app/blog/page.tsx
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog', {
    next: { tags: ['posts'] }, // ক্যাশ ট্যাগ যোগ
  });
  const posts = await data.json();
  // ...
}
```

```typescript
// app/actions.ts
'use server';

import { revalidateTag } from 'next/cache';

export async function createPost() {
  revalidateTag('posts'); // 'posts' ট্যাগযুক্ত ক্যাশ আপডেট
}
```

**ব্যাখ্যা:**
- `next: { tags: ['posts'] }`: ফেচ রিকোয়েস্টে ক্যাশ ট্যাগ যোগ করা হয়েছে।
- `revalidateTag('posts')`: 'posts' ট্যাগযুক্ত ক্যাশ আপডেট হবে।

---

### **ISR এর জন্য কনফিগারেশন**

#### **রুট সেগমেন্ট কনফিগারেশন**

1. **`revalidate`**: ক্যাশ আপডেটের সময় নির্ধারণ করে।
2. **`dynamicParams`**: অজানা পাথের জন্য 404 রিটার্ন করে বা অন-ডিমান্ড জেনারেশন করে।

```typescript
// app/blog/[id]/page.tsx
interface Post {
  id: string;
  title: string;
  content: string;
}

export const revalidate = 60; // প্রতি 60 সেকেন্ড পর ক্যাশ আপডেট
export const dynamicParams = true; // অজানা পাথের জন্য অন-ডিমান্ড জেনারেশন

export async function generateStaticParams() {
  const posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) =>
    res.json()
  );
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const post: Post = await fetch(`https://api.vercel.app/blog/${id}`).then((res) =>
    res.json()
  );

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
```

**ব্যাখ্যা:**
- `generateStaticParams`: বিল্ড টাইমে স্ট্যাটিক প্যারামিটার জেনারেট করে।
- `dynamicParams = true`: অজানা পাথের জন্য অন-ডিমান্ড জেনারেশন করে।

---

### **ISR ট্রাবলশুটিং**

1. **লোকাল ডেভেলপমেন্টে ক্যাশ ডিবাগিং**:
   ```javascript
   // next.config.js
   module.exports = {
     logging: {
       fetches: {
         fullUrl: true,
       },
     },
   };
   ```

2. **প্রোডাকশন বিহেভিয়ার ভেরিফিকেশন**:
   ```bash
   next build
   next start
   ```

3. **ক্যাশ হিট এবং মিস লগিং**:
   ```env
   # .env
   NEXT_PRIVATE_DEBUG_CACHE=1
   ```

---

### **ক্যাভিয়েটস (সতর্কতা):**

1. **Node.js রানটাইম**: ISR শুধুমাত্র Node.js রানটাইমে সাপোর্টেড।
2. **স্ট্যাটিক এক্সপোর্ট**: ISR স্ট্যাটিক এক্সপোর্টে সাপোর্টেড নয়।
3. **মাল্টিপল ফেচ রিকোয়েস্ট**: যদি একাধিক ফেচ রিকোয়েস্ট থাকে, তাহলে সর্বনিম্ন `revalidate` টাইম ব্যবহার করা হবে।

---

### **উপসংহার**

Incremental Static Regeneration (ISR) ব্যবহার করে আপনি আপনার Next.js অ্যাপ্লিকেশনের পারফরম্যান্স এবং স্কেলেবিলিটি উন্নত করতে পারেন। এটি স্ট্যাটিক কন্টেন্ট আপডেট, ক্যাশিং, এবং অন-ডিমান্ড জেনারেশনকে সহজ করে তোলে। এই গাইড অনুসরণ করে আপনি ISR সঠিকভাবে ইমপ্লিমেন্ট করতে পারবেন। 😊
</details>
<details> 
 <summary> </summary>
</details>
<details> 
 <summary> </summary>
</details>


