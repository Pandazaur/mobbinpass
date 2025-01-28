function enhanceMobbinImages() {
    console.log('[Mobbin Extension] Enhancing ...')
    try {
        const sidebar = document.querySelector('aside.sticky.z-10');
        if (sidebar) sidebar.remove();
    } catch(e) {}

    document.querySelectorAll('img[src*="https://bytescale.mobbin.com/FW25bBB/image/content/app_screens"]')
        .forEach(img => {
            if (!img.dataset.processed) {
                const url = new URL(img.src);
                img.src = url.origin + url.pathname;
                if (img.parentElement) {
                    img.parentElement.className = '';
                }
                img.dataset.processed = 'true';
            }
        });
}

// Observer pour les changements dynamiques dans le DOM
const observer = new MutationObserver((mutations) => {
    enhanceMobbinImages();
});

// Configuration et démarrage de l'observer
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Exécution initiale
enhanceMobbinImages();