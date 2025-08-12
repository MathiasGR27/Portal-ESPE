let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    console.log("Evento por defecto anulado")
    e.preventDefault(); //Prevenir el comportamiento por defecto del navegador
    deferredPrompt = e; //Guardar el evento para usarlo después
});
//Cuando se carge el DOM
window.addEventListener("load", async () => {
   await Notification.requestPermission(); //Solicitar permiso para notificaciones
   if (navigator.serviceWorker) {
    const basePath = location.hostname === "localhost" ? "" : "/Portal-ESPE";
    try {
      const res = await navigator.serviceWorker.register(`${basePath}/sw.js`);
      if (res) {
        const ready = await navigator.serviceWorker.ready;
        ready.showNotification("Portal Espe MG", {
          body: "La aplicación se ha instalado correctamente",
          icon: `/src/images/icons/256X256.png`,
          vibrate: [100, 50, 200],
        });
      }
    } catch (error) {
      console.error("Service Worker registration failed:", error);
    }
  }

    const bannerInstall = document.querySelector("#banner-install");
    bannerInstall.addEventListener("click", async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt(); //Mostrar el banner de instalación
            const response = await deferredPrompt.userChoice; //Esperar la respuesta del usuario
            if (response.outcome === "accepted") {
                console.log("Usuario aceptó la instalación de la PWA");
            }
        }
    });
});


