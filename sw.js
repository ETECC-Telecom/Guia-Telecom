// 1. Defina um nome para o cache (mude o número toda vez que alterar os arquivos)
const CACHE_NAME = 'pwa-cache-v1';

// 2. Liste os arquivos que você deseja pré-armazenar em cache (essenciais para offline)
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  '/static/LogoIcon.svg'
  // Adicione todos os arquivos estáticos que o app PRECISA para funcionar
];

// ----------------------------------------------------
// Evento 1: INSTALAÇÃO (Armazena os arquivos em cache)
// ----------------------------------------------------
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...');
  // Espera até que o cache seja aberto e os arquivos sejam adicionados
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Pré-cacheando recursos essenciais.');
        return cache.addAll(urlsToCache);
      })
  );
});

// ----------------------------------------------------
// Evento 2: FETCH (Intercepta as requisições de rede)
// ----------------------------------------------------
self.addEventListener('fetch', event => {
  // Intercepta todas as requisições (como carregar o HTML, CSS, Imagens)
  event.respondWith(
    // Tenta encontrar a resposta no cache primeiro
    caches.match(event.request)
      .then(response => {
        // Se o recurso estiver no cache, retorna ele
        if (response) {
          // console.log('Servindo do cache:', event.request.url);
          return response;
        }
        // Se não estiver no cache, tenta buscar na rede
        // console.log('Buscando na rede:', event.request.url);
        return fetch(event.request);
      })
  );
});

// ----------------------------------------------------
// Evento 3: ATIVAÇÃO (Limpa caches antigos)
// ----------------------------------------------------
self.addEventListener('activate', event => {
  console.log('Service Worker: Ativando e limpando caches antigos.');
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Exclui qualquer cache que não esteja na lista branca
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Service Worker: Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});