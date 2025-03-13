import Link from 'next/link';

export default function DropdownMenu({ items }) {
  return (
    <div className="dropdown-menu absolute top-full left-0 bg-white min-w-[200px] shadow-lg rounded-md py-2 z-50">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
              <span className="block px-4 py-2 hover:bg-gray-100 transition cursor-pointer">
                {item}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
