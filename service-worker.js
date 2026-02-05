const CACHE_NAME = 'financeiro-v1'

const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',

  // CSS
  './style/main.css',
  './style/root.css',
  './style/header.css',
  './style/menus.css',
  './style/adicionar.css',
  './style/movimentacao.css',
  './style/perfil.css',
  './style/grafico.css',
  './style/secao1.css',

  // JS
  './js/abas.js',
  './js/fotoPerfil1.js',
  './js/movimentacao.js',
  './js/perfil.js'
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
