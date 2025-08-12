# Portal ESPE MG - PWA

Aplicación web progresiva (PWA) para mostrar información de la Universidad de la Fuerza Armada ESPE.

---

## Descripción

Este proyecto implementa una PWA con funcionalidades de:

- Instalación como aplicación independiente (standalone).
- Service Worker para cachear archivos y permitir funcionamiento offline.
- Push notifications.
- Control de la instalación mediante el evento `beforeinstallprompt`.

---

## Tecnologías usadas

- HTML / CSS / JavaScript
- Service Worker (API)
- Web Manifest

---

## Estructura del proyecto

/src
/css
app.css
/js
app.js
/images
/icons
144x144.png
192x192.png
256x256.png
384x384.png
512x512.png
sw.js
manifest.json
index.html

yaml
Copiar
Editar

---

## Cómo usar

1. Servir la aplicación en un servidor local o remoto (no funciona solo con abrir archivos localmente).
2. Acceder desde un navegador compatible (Chrome, Edge, Firefox).
3. Esperar a que el Service Worker se registre (verificar en consola o pestaña Application).
4. Se mostrará el botón para instalar la aplicación (si el navegador lo soporta).
5. Al instalar, la app funcionará en modo offline usando el cache definido.

---

## Notas

- Asegúrate de que las rutas en `manifest.json` y `sw.js` coincidan con la estructura y URL de despliegue.
- Para desarrollo local, revisa el valor de `start_url` y `scope` en el manifest.
- La aplicación solicita permiso para notificaciones, que se pueden personalizar en el Service Worker.

---

## Autor

Mathias Gualpa

---
