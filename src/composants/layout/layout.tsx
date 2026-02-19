import React from "react";
import { Link, Outlet } from "react-router-dom"; // Import indispensable

export default function LayoutPage() {
  return (
    <div className="layout">
      <nav>
        <Link to="/">Home</Link>
         <Link to="/contact">Contact</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <section>
        <h2>Footer</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        tenetur mollitia aspernatur, aliquid cumque nemo ut molestiae iste
        suscipit dignissimos dicta adipisci. Fugiat repellat neque laborum fugit
        consequuntur! Laborum, saepe?
      </section>
    </div>
  );
}
