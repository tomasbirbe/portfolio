export default function DrawerLink({ children, onClick, ...props }) {
  return (
    <li className="w-fit" onClick={onClick}>
      <a className="font-bold text-2xl" {...props}>
        {children}
      </a>
    </li>
  );
}
