// AppRouter.jsx
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
  } from "react-router-dom";
  
  import { DcPage, MarvelPage, SearchPage, HeroPage } from "../heroes";
  import { HeroesApp } from "../HeroesApp";
  import { AuthProvider, LoginPage } from "../auth";
  import { PrivateRoute } from "./PrivateRoute"; // Importamos el componente PrivateRoute
import { PublicRoute } from "./PublicRoute";
  
  // Componente para manejar rutas no encontradas
  const NotFound = () => <Navigate to="/marvel" />;
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute>
          <HeroesApp />
        </PrivateRoute>
      ),
      children: [
        {
          index: true,
          element: <Navigate to={"/marvel"} />,
        },
        {
          path: "/dc",
          element: (
            <PrivateRoute>
              <DcPage />
            </PrivateRoute>
          ),
        },
        {
          path: "/marvel",
          element: (
            <PrivateRoute>
              <MarvelPage />
            </PrivateRoute>
          ),
        },
        {
          path: "/search",
          element: (
            <PrivateRoute>
              <SearchPage />
            </PrivateRoute>
          ),
        },
        {
          path: "/hero/:id",
          element: (
            <PrivateRoute>
              <HeroPage />
            </PrivateRoute>
          ),
        },
        {
          path: "*", // Este maneja cualquier ruta no definida
          element: <NotFound />, // Redirige a MarvelPage
        },
      ],
    },
    {
      path: "/login",
      element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
    },
  ]);
  
  export const AppRouter = () => {
    return (
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    );
  };
  