export function handleUnsupportedBrowser() {
  document.addEventListener("DOMContentLoaded", () => {
    if (!("Translator" in window)) {
      // Mostrar el modal después de 1 segundo
      setTimeout(() => {
        const modal = document.getElementById(
          "unsupported-browser-modal"
        );

        if (modal && !window.matchMedia("(display-mode: standalone)").matches) {
          modal.showModal();

          // Deshabilitar el botón de traducción
          const translateButton = document.getElementById(
            "translate-button"
          );
          translateButton.disabled = true;

          // Cerrar el modal al hacer clic en el botón
          document
            .getElementById("close-modal")
            ?.addEventListener("click", () => {
              modal.close();
            });

          // Cerrar el modal al hacer clic fuera del contenido
          document
            .getElementById("modal-backdrop")
            ?.addEventListener("click", (event) => {
              if (event.target === document.getElementById("modal-backdrop")) {
                modal.close();
              }
            });
        }
      }, 1000);
    }
  });
}
