import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../layout";
import {
  HomeComponent,
  InfoComponent,
  RecordComponent,
  SearchComponent,
} from "../../components";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomeComponent /> },
      { path: "search", element: <SearchComponent /> },
      { path: "record", element: <RecordComponent /> },
      { path: "info", element: <InfoComponent /> },
    ],
  },
]);
