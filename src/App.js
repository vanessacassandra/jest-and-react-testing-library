import SuspenseExample from "./examples/lazy-loading/SuspenseExample";
import { NavigationProvider } from "./NavigationContext";
import Route from "./components/Route";
import Home from "./Home";
import AccessibleForm from "./examples/accessible-form/AccessibleForm";
import InaccessibleForm from "./examples/inaccessible-form/InaccessibleForm";
import Counter from "./examples/react-testing-library/Counter";
import ImageRequest from "./examples/mocking-request/ImageRequest";
import { SLUGS } from "./constants";

function App() {
  const routes = {
    [SLUGS.accessibleForm]: AccessibleForm,
    [SLUGS.inaccessibleForm]: InaccessibleForm,
    [SLUGS.lazyLoading]: SuspenseExample,
    [SLUGS.counter]: Counter,
    [SLUGS.imageRequest]: ImageRequest,
  };

  return (
    <div className="App">
      <NavigationProvider>
        <Route href="/" render={() => <Home />} />
        {Object.entries(routes).map(([key, Value]) => (
          <Route key={key} href={key} render={() => <Value onSubmit={() => {}} />} />
        ))}
      </NavigationProvider>
    </div>
  );
}

export default App;
