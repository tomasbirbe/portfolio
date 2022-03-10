export default function NavLink({ children, ...props }) {
  return (
    <li>
      <a
        className="hover:bg-white relative hover:text-black px-4 py-2 rounded-xl transition-all"
        {...props}
      >
        {children}
      </a>
    </li>
  );
}
