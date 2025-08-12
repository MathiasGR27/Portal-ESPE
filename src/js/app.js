let deferredPrompt;

// Evento para interceptar el prompt de instalación
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault(); // Evitar el comportamiento por defecto
  deferredPrompt = e;  // Guardar el evento para usarlo después
});

// Cuando cargue la página
window.addEventListener("load", async () => {
  // Solicitar permiso para notificaciones
  await Notification.requestPermission();

  // Registrar Service Worker
  if (navigator.serviceWorker) {
    const basePath = location.hostname === "localhost" ? "" : "/Portal-ESPE";
    try {
      const res = await navigator.serviceWorker.register(`${basePath}/sw.js`);
      if (res) {
        const ready = await navigator.serviceWorker.ready;
        ready.showNotification("EspeNotes", {
          body: "La aplicación se ha instalado correctamente",
          icon: `/src/assets/icons/144x144.png`,
          vibrate: [100, 50, 200],
        });
      }
    } catch (error) {
      console.error("Error al registrar el Service Worker:", error);
    }
  }

  // Botón para instalar la PWA
  const bannerInstall = document.querySelector("#banner-install");
  if (bannerInstall) {
    bannerInstall.addEventListener("click", async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const response = await deferredPrompt.userChoice;
        if (response.outcome === "accepted") {
          console.log("Usuario aceptó la instalación de la PWA");
        }
        deferredPrompt = null; // Limpiar referencia
      }
    });
  }
});
