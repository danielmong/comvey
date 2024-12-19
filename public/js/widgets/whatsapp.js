(function() {
    // Wait until the DOM is fully loaded
    document.addEventListener("DOMContentLoaded", () => {
      // Add Tailwind CSS to the host site
      const tailwindLink = document.createElement("link");
      tailwindLink.href = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
      tailwindLink.rel = "stylesheet";
      document.head.appendChild(tailwindLink);
  
      // Create the bubble container
      const bubble = document.createElement("div");
      bubble.id = "custom-widget-bubble";
      bubble.className = "fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center cursor-pointer";
      bubble.style.zIndex = "9999";
  
      // Add an icon to the bubble
      bubble.innerHTML = '<span class="material-icons">whatsapp</span>'; // Replace with desired icon
  
      // Add click event to the bubble to open WhatsApp
      bubble.addEventListener("click", () => {
        const phoneNumber = "09035853253";
        const whatsappURL = "https://wa.me/09035853253";
        window.open(whatsappURL, "_blank");
      });
  
      // Append the bubble to the body
      document.body.appendChild(bubble);
    });
})();
    