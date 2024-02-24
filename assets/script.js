document.addEventListener("DOMContentLoaded", function() {
    loadIcons();

    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(function(toggleButton) {
        toggleButton.addEventListener("click", function() {
            let faqCard = this.closest('.faq-card');
            let faqText = faqCard.querySelector('.faq-text');
            let toggleIcon = this.querySelector('.toggle-icon');

            if(faqText.classList.contains('hidden-text')) {
                faqCard.classList.add('faq-active');
                faqText.classList.remove('hidden-text');
                toggleIcon.src = "assets/images/toggle_up_arrow.png";
            } else {
                faqCard.classList.remove('faq-active');
                faqText.classList.add('hidden-text');
                toggleIcon.src = "assets/images/toggle_down_arrow.png";
            }
        })
    })
});

function loadIcons(){
    let faqCards = document.querySelectorAll('.faq-card');
    
    faqCards.forEach((faqCard) => {
        let toggleIcon = faqCard.querySelector('.toggle-icon');
        if(faqCard.classList.contains("faq-active")){
            toggleIcon.src = "assets/images/toggle_up_arrow.png";
        }
        else {
            toggleIcon.src = "assets/images/toggle_down_arrow.png";
        }
    })
}