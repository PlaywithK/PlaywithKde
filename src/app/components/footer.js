import Link from 'next/link';

export default function Footer() {
  const linkClasses = `
    relative text-gray-100 hover:text-teal-400 transition-colors duration-300
    group
  `;

  const links = [
    { href: '/kontakt', label: 'Kontakt' },
    { href: '/impressum', label: 'Impressum' },
  ];

  return (
    <footer className="z-50 backdrop-blur bg-gray-900 bg-opacity-90 border-t border-gray-700 py-4 px-6 flex flex-col items-center gap-2">
      <div className="text-gray-400 text-sm">
        © {new Date().getFullYear()} PlaywithK.de - Alle Rechte vorbehalten.
      </div>

      <div className="flex items-center gap-2 text-gray-100">
        {links.map(({ href, label }, index) => (
          <span key={label} className="flex items-center">
            <Link href={href} className={linkClasses}>
              {label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-teal-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            {index === 0 && <span className="mx-2 select-none text-xl">·</span>}
          </span>
        ))}
      </div>
    </footer>
  );
}