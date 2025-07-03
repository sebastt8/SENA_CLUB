# SENA-app

Este proyecto es una aplicación monorepo gestionada con **Nx**, que incluye un frontend desarrollado en **Angular** y un backend construido con **NestJS**. Utiliza **Prisma** como ORM y **Bootstrap** para estilos en el frontend.

## Tecnologías utilizadas

- **Nx**: Monorepo para gestionar múltiples aplicaciones y librerías.
- **Angular**: Framework para el desarrollo del frontend.
- **NestJS**: Framework para el desarrollo del backend (API REST).
- **Prisma**: ORM para la gestión de la base de datos.
- **Bootstrap**: Framework de estilos CSS.
- **Jest**: Testing.
- **ESLint & Prettier**: Linter y formateador de código.

## Estructura del proyecto

```
apps/
  ├── api/   # Backend (NestJS)
  └── web/   # Frontend (Angular)
  └── database-scripts/ (scripts bd)
```

## Requisitos previos

- Node.js (recomendado v18+)
- npm (v9+)
- [Nx CLI](https://nx.dev/) (opcional, pero recomendado para comandos globales)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/AntonioSantanaCorp/SENA-app.git
   cd SENA-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura la base de datos (si usas Prisma):
   - Crea el archivo `.env` en la raíz del proyecto con la cadena de conexión de tu base de datos.
   - Ejecuta las migraciones:
     ```bash
     npx prisma migrate deploy
     ```

## Levantar el proyecto

Puedes levantar tanto el frontend como el backend en paralelo con el siguiente comando:

```bash
npm start
```

Esto ejecutará ambos servicios:
- **Frontend**: Angular (por defecto en `http://localhost:4200`)
- **Backend**: NestJS API (por defecto en `http://localhost:3000`)

### Comandos útiles

- Levantar solo el frontend:
  ```bash
  nx serve web
  ```
- Levantar solo el backend:
  ```bash
  nx serve api
  ```
- Construir ambos proyectos:
  ```bash
  npm run build
  ```
- Ejecutar pruebas:
  ```bash
  npm test
  ```
- Lint:
  ```bash
  npm run lint
  ```

## Notas

- Asegúrate de tener la base de datos configurada y corriendo antes de levantar el backend.
- Puedes personalizar los puertos y configuraciones en los archivos de cada aplicación dentro de `apps/web` y `apps/api`.
