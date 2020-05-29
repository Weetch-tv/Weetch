// En producción, registramos un service worker para servir a cosas desde la memoria local.
//Esto permite que la aplicación se cargue más rápido en visitas posteriores en producción y proporciona

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export default function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // El constructor de URL está disponible en todos los navegadores que admiten Service Workers.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // Está corriendo en localhost. Checamos si service worker todavía existe o no.
        checkValidServiceWorker(swUrl);
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'Weetch está siendo servidaen caché por un service worker'
          );
        });
      } else {
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // En este punto, el contenido anterior habrá sido purgado y
              // el contenido nuevo se habrá agregado al caché.
              console.log('Nuevo contenido esta disponible, por favor vuelva a cargar la página.');
            } else {
              //En este punto, todo ha sido preestablecido.
              console.log('El contenido se almacena en caché para su uso sin conexión.');
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error durante el registro del service worker', error);
    });
}

function checkValidServiceWorker(swUrl) {
  // Compruebe si se puede encontrar al service worker. Si no puede volver a cargar la página.
  fetch(swUrl)
    .then(response => {
      // Asegúrese de que el service worker exista y que realmente estemos obteniendo un archivo js.
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
        // No se encontró trabajador de servicio. Probablemente una aplicación diferente. Hay que recargar la página.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Se encontró el service worker. Proceder normalmente.
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        'No se encontró conexión a internet. La aplicación se ejecuta fuera de línea.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
