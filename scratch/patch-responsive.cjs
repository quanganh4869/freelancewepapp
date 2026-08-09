const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Add hamburger button and Mobile Menu Overlay
const mobileMenuHTML = `
        <!-- Hamburger Button (Mobile) -->
        <button id="mobile-menu-btn" class="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 z-[101] relative">
            <span class="w-6 h-0.5 bg-ink transition-transform duration-300 origin-center"></span>
            <span class="w-6 h-0.5 bg-ink transition-opacity duration-300"></span>
            <span class="w-6 h-0.5 bg-ink transition-transform duration-300 origin-center"></span>
        </button>
`;

// Insert the hamburger button next to the "Liên hệ ngay" button
html = html.replace(/(<a href="contact\.html" [^>]*>Liên hệ ngay<\/a>\s*)<\/div>/, '$1' + mobileMenuHTML + '\n        </div>');

const mobileMenuOverlay = `
    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="fixed inset-0 bg-surface z-[99] flex flex-col justify-center items-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300">
        <a href="#works" class="mobile-nav-link text-3xl font-bold hover:text-brand transition-colors">Dự án</a>
        <a href="#services" class="mobile-nav-link text-3xl font-bold hover:text-brand transition-colors">Dịch vụ</a>
        <a href="#process" class="mobile-nav-link text-3xl font-bold hover:text-brand transition-colors">Quy trình</a>
        <a href="#about" class="mobile-nav-link text-3xl font-bold hover:text-brand transition-colors">Về tôi</a>
    </div>
`;

// Insert the overlay right after the nav
html = html.replace(/(<\/nav>)/, '$1\n' + mobileMenuOverlay);

// 2. Add JS for Mobile Menu
const jsCode = `
            // Mobile Menu Toggle
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-nav-link');
            let isMenuOpen = false;

            if (mobileBtn && mobileMenu) {
                const toggleMenu = () => {
                    isMenuOpen = !isMenuOpen;
                    if (isMenuOpen) {
                        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                        document.body.style.overflow = 'hidden'; // Prevent scrolling
                        // Animate hamburger to X
                        mobileBtn.children[0].style.transform = 'translateY(8px) rotate(45deg)';
                        mobileBtn.children[1].style.opacity = '0';
                        mobileBtn.children[2].style.transform = 'translateY(-8px) rotate(-45deg)';
                    } else {
                        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                        document.body.style.overflow = ''; // Restore scrolling
                        // Restore hamburger
                        mobileBtn.children[0].style.transform = 'none';
                        mobileBtn.children[1].style.opacity = '1';
                        mobileBtn.children[2].style.transform = 'none';
                    }
                };

                mobileBtn.addEventListener('click', toggleMenu);
                mobileLinks.forEach(link => {
                    link.addEventListener('click', toggleMenu);
                });
            }
`;

html = html.replace(/(document\.querySelectorAll\('\.reveal'\)\.forEach)/, jsCode + '\n            $1');

fs.writeFileSync('index.html', html);
console.log("Added mobile menu to index.html");
