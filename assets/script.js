document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(function(toggleButton) {
        toggleButton.addEventListener("click", function() {
            let faqCard = this.closest('.faq-card');
            let faqText = faqCard.querySelector('.faq-text');

            if(faqText.classList.contains('hidden-text')) {
                faqCard.classList.add('faq-active');
                faqText.classList.remove('hidden-text');
            } else {
                faqCard.classList.remove('faq-active');
                faqText.classList.add('hidden-text');
            }
        })
    })
});