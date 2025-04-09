// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Page transition animations
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// Add to cart animation
function addToCart(productId) {
    const product = document.querySelector(`[data-product-id="${productId}"]`);
    const cart = document.querySelector('.fa-shopping-cart');
    
    const clone = product.cloneNode(true);
    const rect = product.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();
    
    clone.style.position = 'fixed';
    clone.style.top = rect.top + 'px';
    clone.style.left = rect.left + 'px';
    clone.style.transition = 'all 0.8s ease-in-out';
    
    document.body.appendChild(clone);
    
    setTimeout(() => {
        clone.style.transform = `translate(${cartRect.left - rect.left}px, ${cartRect.top - rect.top}px) scale(0.1)`;
        clone.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        clone.remove();
        cart.classList.add('bump');
        setTimeout(() => cart.classList.remove('bump'), 300);
    }, 800);
}