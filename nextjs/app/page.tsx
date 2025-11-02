// import router from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Button = ({ label, href }: { label: string; href: string }) => {
  return (
    <button
      className='w-full p-4 text-center hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md bg-zinc-100 dark:bg-zinc-800'
      // onClick={() => console.log(href)}
    >
      {label}
    </button>
  );
};

export default function Home() {
  return (
    <div className='flex min-h-screen'>
      <aside className='w-64 bg-white dark:bg-black border-r border-zinc-200 dark:border-zinc-800'>
        <div className='p-10 flex flex-col gap-4'>
          {navItems.map((item, index) => (
            <Button
              label={item.label}
              href={item.href}
              key={`${item.label}-${index}-`}
            />
          ))}
        </div>
      </aside>
      <main className='flex-1 bg-zinc-50 dark:bg-black'>
        {/* Page content */}
      </main>
    </div>
  );
}
