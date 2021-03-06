export default function NavLink({ children, ...props }) {
  return (
    <li className="text-font-primary">
      <a
        className="hover:bg-white w-full relative hover:text-black px-4 py-2 rounded-xl transition-all"
        {...props}
      >
        {children}
      </a>
    </li>
  );
}
