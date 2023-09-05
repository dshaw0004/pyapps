

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open("pyapps_web_app").then(cache => {
            console.log(cache)
            return cache.addAll([
                "./index.html",
                './offline.html'
            ])
        })
    )
})

this.addEventListener('fetch', event => {
    if(!navigator.onLine){
        event.respondWith(
            caches.match('offline.html')
        )
    }
    // event.re
    // console.log(navigator.onLine)
})