# Polska ’26 · web compartida (v34, 25/10/2026)

Esta carpeta es la guía completa (versión 34) preparada para GitHub Pages, con sincronización
entre los dos móviles a través de Firebase. Guía paso a paso con capturas: documento
«Polska '26 · publicar y actualizar la web» en Claude.

## 1. Firebase (ya tienes el proyecto `polska26` con Google habilitado)
1. Menú **Bases de datos y almacenamiento → Firestore Database → Crear base de datos**.
   Edición Standard, identificador (default), ubicación **eur3 (Europa)**, **modo de producción**.
2. Pestaña **Reglas**: pega el contenido de `firestore.rules`, cambia los dos emails (en minúsculas) y **Publicar**.
3. **Configuración → Configuración del proyecto → General → Tus apps → </>**: apodo `web`, sin Hosting,
   **Registrar app** y copia el bloque `firebaseConfig`.

## 2. GitHub Pages
4. Repo público `polonia`. Sube el contenido de esta carpeta (la subida por navegador admite 100 archivos
   por tanda: la carpeta `img/c` tiene 287, así que es mejor subirla con GitHub Desktop, con `git`, o
   dejar que Claude lo publique con un token de alcance fino solo para este repo).
5. Edita `config.js` en GitHub y pega los valores de tu `firebaseConfig`. Commit.
6. **Settings → Pages → Deploy from a branch → main → / (root)**. En 1–2 min: `https://TU_USUARIO.github.io/polonia/`.
7. En Firebase: **Authentication → pestaña Configuración → Dominios autorizados → Agregar dominio** → `TU_USUARIO.github.io`.

## 3. Usarla
8. Abre la web en el móvil: aparece la hoja «Entrad con Google». Cada uno entra con su cuenta.
   El primer acceso crea el viaje con los hoteles, vuelos, tren, excursiones y tareas ya hechas.
9. El localizador del tren no va en el código público: escríbelo en Inicio → tarjeta del tren → Editar.
10. Instalar como app: Android (Chrome) → menú ⋮ → **Instalar aplicación**. iPhone (Safari) → Compartir →
    **Añadir a pantalla de inicio** (en iPhone se abre dentro de Safari a propósito: así el acceso con Google
    funciona siempre).
11. Cerrar sesión: abrir la guía con `#salir` al final de la dirección.
12. Sin `config.js` relleno, la guía funciona igual pero solo guarda en el propio móvil.

## Actualizar
Sube la carpeta nueva encima **sin tocar `config.js`** (el de GitHub ya lleva tus claves). Los datos viven
en Firestore y no se pierden. En el móvil, cerrar la app del todo y abrirla.

## Privacidad
- Repositorio público: cualquiera con la dirección ve el itinerario y los nombres (la web pide no ser indexada).
- Gastos, diario, reservas, checklist y billetes: en Firestore (Europa), solo para las dos cuentas de las reglas.
- Las fotos de la pestaña Fotos se guardan en cada móvil (todavía no se comparten).
