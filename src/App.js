import { useLayoutEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { routes } from "./routes";

/**
 * Wrapper component.
 * A layout wrapper that scrolls to the top of the page whenever the location changes.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The content to be wrapped by the layout wrapper.
 * @returns {JSX.Element} JSX code for rendering the Wrapper component.
 */
const Wrapper = ({ children }) => {
  const location = useLocation();

  // Use useLayoutEffect to scroll to the top of the page when the location changes
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

/**
 * App component.
 * The main component that renders the entire application, including the layout wrapper and routes.
 *
 * @returns {JSX.Element} JSX code for rendering the App component.
 */

function App() {
  const pages = useRoutes(routes);
  return (
    // Use the Wrapper component to ensure scrolling to the top on route changes
    <Wrapper>{pages}</Wrapper>
  );
}

export default App;
