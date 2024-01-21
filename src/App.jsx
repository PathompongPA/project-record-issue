import { RouterProvider } from "react-router-dom";
import { createContext, useReducer } from "react";
import { MainRoute } from "./routes";
import { stateManagement } from "./stores";

export const Context = createContext();

function App() {
  const [state, dispatch] = useReducer(stateManagement, {});
  return (
    <Context.Provider value={(state, dispatch)}>
      <RouterProvider router={MainRoute} />
    </Context.Provider>
  );
}

export default App;
