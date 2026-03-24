document.addEventListener('DOMContentLoaded', () => {
    // Add simple hover interactions and console interactions for the demo

    const primaryButtons = document.querySelectorAll('.btn-primary');
    
    primaryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Simple click animation effect
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            ripples.style.position = 'absolute';
            ripples.style.background = '#fff';
            ripples.style.transform = 'translate(-50%, -50%)';
            ripples.style.pointerEvents = 'none';
            ripples.style.borderRadius = '50%';
            ripples.style.animation = 'animate 1s linear';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            
            this.appendChild(ripples);
            
            setTimeout(() => {
                ripples.remove();
            }, 1000);

            console.log(`Action triggered for: ${e.target.innerText}`);
            
            if(e.target.id === 'startBtn') {
                alert('Welcome to AI Nexus! Ready to build amazing things.');
            }
        });
    });

    // Pricing section toggle
    const pricingLink = document.querySelector('a[href="#pricing"]');
    const pricingSection = document.getElementById('pricing');

    if (pricingLink && pricingSection) {
        pricingLink.addEventListener('click', (e) => {
            e.preventDefault();
            const isVisible = pricingSection.classList.toggle('is-visible');
            // Update active state on nav link
            pricingLink.style.color = isVisible ? 'var(--text-primary)' : '';
            // Smooth scroll to section when revealing
            if (isVisible) {
                setTimeout(() => {
                    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    }

    console.log("AI Nexus Frontend App Initialized Successfully.");
});
