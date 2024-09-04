# React Heroes App con Rutas Privadas y Públicas

Este proyecto es una aplicación de React que gestiona rutas privadas y públicas utilizando `react-router-dom`. La aplicación está diseñada para una administración simple de usuarios, con autenticación y autorización básica para acceder a diferentes partes de la aplicación.

## Características

- **Rutas Privadas**: Permite el acceso a ciertas páginas solo si el usuario está autenticado.
- **Rutas Públicas**: Las páginas públicas, como la de login, son accesibles para los usuarios no autenticados. Los usuarios autenticados son redirigidos a la página principal.
- **Protección de Rutas**: Implementación de protección de rutas mediante componentes de orden superior (`PrivateRoute` y `PublicRoute`).
- **Autenticación con LocalStorage**: La autenticación de usuarios se gestiona mediante `localStorage` para mantener la sesión del usuario.

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **React Router**: Para el manejo de rutas y navegación.
- **Context API**: Para la gestión del estado global de la autenticación.
- **useReducer Hook**: Para manejar el estado de autenticación mediante un reducer.

## Requisitos Previos

- Node.js (>= 14.x)
- npm o yarn

## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/react-heroes-app.git
   cd react-heroes-app
