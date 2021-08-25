import React from "react";
import { routes } from "./constants";

const Home = () => {
  return (
    <div>
      <h1>Jest and React Testing Library</h1>
      <ol>
        {routes.map((route) => (
          <li key={route.title}>
            <a href={route.href}>{route.title}</a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Home;
