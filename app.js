// Verifica se o navegador suporta Service Workers
if ('serviceWorker' in navigator) {
  // O navegador irá tentar baixar e instalar o Service Worker (sw.js)
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(registration => {
        console.log('Service Worker registrado com sucesso! Escopo:', registration.scope);
      })
      .catch(err => {
        console.log('Falha no registro do Service Worker:', err);
      });
  });
}
