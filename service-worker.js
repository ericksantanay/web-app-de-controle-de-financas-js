const CACHE_NAME = 'financeiro-v1'

const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',

  // CSS
  './assets/style/main.css',
  './assets/style/root.css',
  './assets/style/header.css',
  './assets/style/menus.css',
  './assets/style/adicionar.css',
  './assets/style/movimentacao.css',
  './assets/style/perfil.css',
  './assets/style/grafico.css',
  './assets/style/secao1.css',

  // JS
  './assets/js/abas.js',
  './assets/js/fotoPerfil1.js',
  './assets/js/movimentacao.js',
  './assets/js/perfil.js'
]




// Instala o service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE)
    })
  )
  self.skipWaiting()
})

// Ativa e limpa cache antigo
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key)
          }
        })
      )
    )
  )
  self.clients.claim()
})

// Intercepta requisições
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})
