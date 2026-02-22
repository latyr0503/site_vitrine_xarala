import { Outlet } from "react-router-dom"; // Import indispensable

export default function LayoutPage() {
  return (
    <div className="layout">
      <header className="text-center pb-5">
        <h1 className="text-3xl font-bold text-center py-4 text-gray-800">
          Bienvenue sur notre Portfolio
        </h1>
        <nav className="space-x-10 text-2xl">
          {/* <NavLink className=" hover:text-gray-500" to="/">
            Home
          </NavLink>
          <NavLink className=" hover:text-gray-500" to="/contact">
            Contact
          </NavLink> */}
          <a className=" hover:text-gray-500" href="#aziz">
            Aziz
          </a>
          <a className=" hover:text-gray-500" href="#facko">
            facko
          </a>
          <a className=" hover:text-gray-500" href="#max">
            Max
          </a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h1 className="text-center text-gray-500 font-bold py-4">
          &copy; 2026 notre Portfolio. Tous droits réservés.
        </h1>
      </footer>
    </div>
  );
}
