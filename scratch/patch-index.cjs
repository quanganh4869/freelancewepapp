const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Add CSS for reveal animations
const styleBlock = `
    <style>
        .text-stroke { -webkit-text-stroke: 1px #1A1A1A; color: transparent; }
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 1px;
            background-color: #1A1A1A;
            transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Scroll Reveal Classes */
        .reveal {
            opacity: 0;
            transform: translateY(40px);
            transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
        .reveal.delay-1 { transition-delay: 100ms; }
        .reveal.delay-2 { transition-delay: 200ms; }
        .reveal.delay-3 { transition-delay: 300ms; }
        .reveal.delay-4 { transition-delay: 400ms; }
    </style>
`;
html = html.replace(/<style>[\s\S]*?<\/style>/, styleBlock.trim());

// 2. Add .reveal classes to sections
// Add to Hero
html = html.replace(/<h1 class="font-sans font-extrabold text-5xl md:text-7xl/g, '<h1 class="reveal font-sans font-extrabold text-5xl md:text-7xl');
html = html.replace(/<div class="flex flex-wrap items-center gap-6 pt-8">/g, '<div class="reveal delay-2 flex flex-wrap items-center gap-6 pt-8">');

// Add to Works Grid items
html = html.replace(/<div class="col-span-12 md:col-span-7">/g, '<div class="col-span-12 md:col-span-7 reveal">');
html = html.replace(/<div class="col-span-12 md:col-span-5 md:pt-32">/g, '<div class="col-span-12 md:col-span-5 md:pt-32 reveal delay-1">');
html = html.replace(/<div class="col-span-12 md:col-span-5">/g, '<div class="col-span-12 md:col-span-5 reveal">');

// Add to Services Grid items
html = html.replace(/<div class="p-10 bg-white rounded-2xl border border-border-tone hover:border-brand\/30 hover:shadow-xl transition-all group">/g, '<div class="p-10 bg-white rounded-2xl border border-border-tone hover:border-brand/30 hover:shadow-xl transition-all group reveal">');
html = html.replace(/<div class="p-10 bg-white rounded-2xl border border-border-tone hover:border-brand\/30 hover:shadow-xl transition-all group lg:translate-y-8">/g, '<div class="p-10 bg-white rounded-2xl border border-border-tone hover:border-brand/30 hover:shadow-xl transition-all group lg:translate-y-8 reveal delay-1">');

// Add to Budget
html = html.replace(/<div class="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border-tone rounded-3xl overflow-hidden shadow-2xl">/g, '<div class="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border-tone rounded-3xl overflow-hidden shadow-2xl reveal">');

// Add to Process
html = html.replace(/<div class="lg:sticky lg:top-48">/g, '<div class="lg:sticky lg:top-48 reveal">');
html = html.replace(/<div class="flex gap-8 group">/g, '<div class="flex gap-8 group reveal">');

// Add to About
html = html.replace(/<div class="max-w-5xl mx-auto space-y-16">/g, '<div class="max-w-5xl mx-auto space-y-16 reveal">');

// 3. Fix Logo link to scroll to top (changed href="index.html" to href="#")
html = html.replace(/href="index\.html"/g, 'href="#"');

// 4. Add JS at the bottom to handle the Intersection Observer and scroll restoration
const scriptBlock = `
    <!-- Scroll Reveal & Initialization Script -->
    <script>
        // Scroll restoration to top on reload
        if (history.scrollRestoration) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);

        // Intersection Observer for Reveal Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: stop observing once revealed
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });
            
            // Allow smooth scroll to top when clicking logo
            document.querySelectorAll('a[href="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            });
        });
    </script>
</body>
`;
html = html.replace(/<\/body>/, scriptBlock);

fs.writeFileSync('index.html', html);
console.log('Done modifying index.html');
