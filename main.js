/* ============================
   NAVIGATION TOGGLE
   ============================ */
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


/* ============================
   PROJECT TABS
   ============================ */
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // Remove active classes
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Add active to clicked tab + matching content
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});


/* ============================
   CONTACT FORM HANDLER
   ============================ */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const recipient = 'joshrboepple@outlook.com';
    const subject = `New Inquiry from ${formData.get('firstName')} ${formData.get('lastName')}`;
    const body = `
      Hello,
      
      You have received a new inquiry. Here are the details:
      
      Full Name: ${formData.get('firstName')} ${formData.get('lastName')}
      Email: ${formData.get('email')}
      Phone: ${formData.get('phone') || 'N/A'}
      Preferred Contact: ${formData.get('preferredContact') || 'N/A'}
      Service Interest: ${formData.get('serviceInterest') || 'N/A'}
      
      Message:
      ${formData.get('message')}
      `;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');

    document.getElementById('formMessage').innerHTML =
      '<p class="success">Your email draft has been prepared. Please check your email client.</p>';

    this.reset();
  });
}
