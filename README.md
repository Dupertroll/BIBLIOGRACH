# 📚 BIBLIOGRACH

**Sistema de gestión bibliotecaria** para instituciones educativas. BIBLIOGRACH permite registrar usuarios, mantener un catálogo de libros actualizado y gestionar solicitudes de préstamo de forma eficiente, con una interfaz moderna y funcional.

## 🛠️ Tecnologías

- **Frontend:** React
- **Backend:** Node.js + Express
- **Base de datos:** PostgreSQL

---

## 📌 Objetivos del Proyecto

- Facilitar la **gestión del inventario** de libros (agregar, eliminar, editar).
- Permitir a los estudiantes explorar el catálogo fácilmente.
- Optimizar el **proceso de préstamo y devolución** de libros.
- Proveer herramientas para una gestión eficiente por parte de los administradores.

---

## 👤 Módulo de Usuarios

### Tipos de usuarios

- **Estudiantes**: pueden explorar el catálogo y solicitar préstamos.
- **Profesores**: mismas funcionalidades que los estudiantes.
- **Administradores**: gestionan el sistema completo.

### Funcionalidades

- Registro de usuarios: `Nombre, Documento, Correo, Contraseña, Tipo`
- Inicio de sesión por correo y contraseña.
- Asignación de ID único a cada usuario (Ej: `ID:12345`)

---

## 📚 Módulo de Catálogo de Libros

### Funcionalidades

- Inventario organizado con los siguientes datos:
  - `Nombre, Autor, Cantidad, Imagen, Año, Editorial, Género, Sistema Dewey, Ubicación física (estantería)`
- CRUD completo para administradores (crear, leer, actualizar y eliminar libros del catálogo).
- Visualización del catálogo por parte de los usuarios.
- Modificación de metadatos técnicos.
- Búsqueda y filtrado por:
  - Autor, Título, Género, Año, Editorial

---

## 📖 Módulo de Exploración del Catálogo

### Funcionalidades

- Ver detalles de cada libro.
- Buscar libros por distintos filtros.
- Consultar disponibilidad.
- Ver sistema de etiquetas (género, editorial, Dewey).
- Visualizar en qué estantería se encuentra físicamente cada libro.

---

## 🔄 Módulo de Préstamos

### Funcionalidades del usuario

- Solicitar préstamo de un libro indicando curso.
- Ver sus préstamos activos.
- Confirmar devolución del libro.

### Funcionalidades del administrador

- Aprobar o rechazar solicitudes.
- Establecer fechas de entrega y devolución.
- Ver listado de préstamos con:
  - `ID, Nombre, Grado, Correo, Documento, Fecha límite`
- Editar registro de préstamos.
- Eliminar o aceptar solicitudes.
- Visualizar todos los préstamos activos.
- CRUD de inventario de libros.
- CRUD del catálogo de libros.
- CRUD de estudiantes, profesores y otros administradores.

---

## ⚙️ Módulo de Administración

### Funcionalidades

- Crear, editar y eliminar administradores.
- Añadir, editar y eliminar libros del inventario.
- Gestionar catálogo completo de libros.
- CRUD de estudiantes y profesores registrados en el sistema.
- Visualizar y controlar el estado de los préstamos.
- Asignar roles y permisos de acceso.

---

## 🔐 Seguridad

- Control de acceso basado en roles (estudiante, profesor, administrador).
- Contraseñas cifradas.
- Identificadores únicos para cada usuario.
- Control de sesión para proteger el acceso al sistema.

