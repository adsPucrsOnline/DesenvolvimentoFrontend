import { Outlet, Link } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/example">Example</Link>
          </li>
          <li>
            <Link to="/next-example">Next example</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default NavigationMenu;
