document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.animated-product');

    products.forEach(product => {
        product.addEventListener('mouseenter', () => {
            product.classList.add('floating');
        });

        product.addEventListener('mouseleave', () => {
            product.classList.remove('floating');
            // Reapplies the animation after a short delay to ensure smooth transition
            setTimeout(() => {
                product.classList.add('floating');
            }, 100);
        });
    });
});