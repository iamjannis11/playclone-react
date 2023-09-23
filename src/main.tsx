import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "./pages/signIn/SignIn";
import Campaign from "./pages/campaign/Campaign";
import Getcampaign from "./pages/getcampaign/Getcampaign";
import Tiktok from "./pages/tiktok/Tiktok";
import TiktokCreators from "./pages/tiktokCreators/TiktokCreators";
import PlaylistCreators from "./pages/playlistCreators/PlaylistCreators";
import Help from "./pages/help/Help";
import Blog from "./pages/blog/Blog";

import AOS from "aos";
import "aos/dist/aos.css";

window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    offset: 100,
  });
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/start-campaign",
    element: <Campaign />,
  },
  {
    path: "/get-it-now",
    element: <Getcampaign />,
  },
  {
    path: "/tiktok-promotion",
    element: <Tiktok />,
  },
  {
    path: "/tiktok-creators",
    element: <TiktokCreators />,
  },
  {
    path: "/playlist-creators",
    element: <PlaylistCreators />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
