import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="page-navigation">
      <ul>
        <li>
          <Link className="link" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" href="/profile">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
