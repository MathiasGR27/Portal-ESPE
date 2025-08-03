
# PWA Boilerplate con Material Design Lite

Este proyecto es una **plantilla de inicio (boilerplate)** para el desarrollo de **Progressive Web Apps (PWA)** utilizando **Material Design Lite** y un entorno de desarrollo automatizado con herramientas modernas como `live-server`, `ESLint`, `Prettier` y `http-server`.

## Objetivo

Proporcionar una base sólida para crear PWAs de manera rápida y profesional, con recarga en vivo, verificación de calidad de código y formateo automático.

---

## Estructura del Proyecto

```
pwa-boilerplate/
├── assets/              # Imágenes e íconos
├── css/
│   └── style.css        # Estilos personalizados
├── js/
│   └── app.js           # Lógica JavaScript
├── index.html           # Página principal con MDL
├── manifest.json        # Manifest de la PWA
├── sw.js                # Service Worker básico
├── .eslintrc.js/json    # Configuración de ESLint
├── .prettierrc          # Configuración de Prettier
├── package.json         # Scripts y dependencias del proyecto
└── README.md            # Este documento
```

---

## Configuración y Herramientas

### 1. Inicialización del proyecto

```bash
npm init -y
```

Esto genera el archivo `package.json` con la configuración base del proyecto.

---

### 2. Servidor de desarrollo con recarga en vivo

```bash
npm install live-server --save-dev
```

Script agregado en `package.json`:

```json
"scripts": {
  "dev": "live-server"
}
```

 **Comando para ejecutar:**
```bash
npm run dev
```
Esto inicia un servidor local que recarga automáticamente al guardar cambios.

---

### 3. Linter de JavaScript con ESLint

```bash
npm install eslint @eslint/js globals --save-dev
npx eslint --init
```

Se configuró para:
- Analizar solo JavaScript.
- Detectar errores y problemas comunes.
- Usar módulos ESM.
- Entorno navegador.

Se generó `.eslintrc.js` o `.eslintrc.json` con las reglas.

**Comando para ejecutar:**
```bash
npm run lint
```

---

### . Formateador de código con Prettier

```bash
npm install prettier eslint-config-prettier --save-dev
```

Se creó un archivo `.prettierrc` con la siguiente configuración:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
```

También se añadió el script:

```json
"format": "prettier --write ."
```

**Comando para ejecutar:**
```bash
npm run format
```

Este comando formatea todos los archivos (HTML, CSS, JS) según las reglas de Prettier.

---

### 5. Servidor de producción simulado

```bash
npm install http-server --save-dev
```

Script añadido:

```json
"serve": "http-server -c-1"
```

**Comando para ejecutar:**
```bash
npm run serve
```

Este comando simula un entorno de producción. El flag `-c-1` desactiva la caché del servidor para que no interfiera con el cache del Service Worker.

---

## Cómo usar este boilerplate

1. Clona el repositorio:
   ```bash
   git clone https://github.com/MathiasGR27/pwa-boilerplate.git
   cd pwa-boilerplate
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Comienza a desarrollar:
   ```bash
   npm run dev
   ```

4. Revisa la calidad de tu código:
   ```bash
   npm run lint
   ```

5. Formatea tu proyecto:
   ```bash
   npm run format
   ```

6. Sirve para producción:
   ```bash
   npm run serve
   ```

---

## Funcionalidades iniciales

- Service Worker registrado (solo instalación básica)
- Manifest.json con metadatos de ejemplo
- Estilos con Material Design Lite
- Live reload para desarrollo
- Scripts automáticos para tareas comunes

---


## Autor

**Mathias Gualpa**
