import { useContext } from "react";
import { NavigationContext } from "../NavigationContext";

const Route = ({ href, render }) => {
  const navObj = useContext(NavigationContext);

  switch (navObj.pathname) {
    case href:
      return render();
    default:
      return null;
  }
};

export default Route;
