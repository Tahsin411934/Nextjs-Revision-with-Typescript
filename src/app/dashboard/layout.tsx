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
