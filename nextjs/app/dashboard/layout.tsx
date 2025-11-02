import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/dashboard' },
  { label: 'Prices', href: '/dashboard/prices' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen'>
      <nav className='w-64 bg-white dark:bg-black border-r border-zinc-200 dark:border-zinc-800 p-4 flex flex-col gap-2'>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className='p-4 text-center hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md bg-zinc-100 dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <main className='flex-1 p-8'>{children}</main>
    </div>
  );
}
