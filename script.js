document.addEventListener('DOMContentLoaded', function () {
  const whatsappLink = document.querySelector('.contact-actions a');
  if (whatsappLink) {
    whatsappLink.addEventListener('click', function () {
      window.open(this.href, '_blank');
    });
  }
});
