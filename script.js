function toggleAccordion(sectionId) {
    const content = document.getElementById(`content${sectionId.slice(-1)}`);
    const radio = document.getElementById(`section${sectionId.slice(-1)}`);

    // Close all accordions
    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach(item => item.classList.remove('active'));

    // Uncheck all radios
    const allRadios = document.querySelectorAll('.accordion-radio');
    allRadios.forEach(item => item.checked = false);

    // Open the clicked accordion
    content.classList.add('active');
    radio.checked = true;
  }