import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./app/layout/RootLayout";
import AboutPage from "./app/routes/about";
import PostPage from "./app/routes/posts/$slug";

import "./index.css";
import Home from "./pages/Home";

// 라우터 설정
// GitHub Pages 배포 시 repository 이름에 맞게 basename 설정
// repository 이름이 'blog-web'인 경우: '/blog-web'
// username.github.io 형식인 경우: '/' (기본값)
const basename = import.meta.env.BASE_URL || '/';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutPage /> },
      { path: "posts/:slug", element: <PostPage /> },
    ],
  },
], {
  basename: basename,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
