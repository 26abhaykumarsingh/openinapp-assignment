import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/main",
    element: <Main></Main>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* Link must be inside the Provider  */}
    </div>
  );
}

export default App;
