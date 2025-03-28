import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

export default function DropdownMenu({
  items,
  parentRef,
  className = "bg-white/80 backdrop-blur-sm"
}) {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  console.log(items, "dropdown items");
  useEffect(() => {
    setMounted(true);

    // Calculate position based on parent ref
    if (parentRef) {
      const rect = parentRef.getBoundingClientRect();
      setPosition({
        top: rect.bottom,
        left: rect.left,
        width: rect.width
      });
    }
  }, [parentRef]);

  const menuContent = (
    <div
      className={`dropdown-menu fixed shadow-lg rounded-md py-2 z-50 ${className} font-sans`}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        minWidth: `${position.width}px`
      }}
    >
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {/* Link direkt olarak kullanılıyor, iç içe LinkComponent kullanımını engellemek için */}
            <Link
              href={item.link || item.props?.href || "#"}
              className="block px-4 py-2 hover:bg-gray-light transition cursor-pointer"
            >
              {/* Eğer item bir string veya element ise doğrudan göster */}
              {typeof item === 'string' ? item : 
               item.name ? item.name : 
               item.props?.children ? item.props.children : 'Menu Item'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  // Use createPortal to render the dropdown at the document body level
  // This prevents it from being constrained by parent element's overflow settings
  return mounted ? createPortal(menuContent, document.body) : null;
}
