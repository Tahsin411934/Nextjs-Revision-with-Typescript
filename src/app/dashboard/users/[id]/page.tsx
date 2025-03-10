export default function UserDetailsPage({ params }: { params: { id: string } }) {
    // params.id সরাসরি ব্যবহার করা
    const userId = params.id;
  
    return (
      <div className="p-5">
        <h1 className="text-3xl font-bold">User ID: {userId}</h1>
        <p>এটি ইউজারের ডিটেইলস পেজ।</p>
      </div>
    );
  }
  