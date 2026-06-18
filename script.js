const APPOINTMENT_URL = "https://calendly.com/YOUR-USERNAME/in-a-brick-discovery-call";
document.querySelectorAll('[data-appointment-link]').forEach(a => a.href = APPOINTMENT_URL);
