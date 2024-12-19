window.CustomLetWidgets = window.CustomLetWidgets || {};
window.CustomLetWidgets["contact-form"] = function () {
    const form = document.createElement("form");
    form.innerHTML = `
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Submit</button>
    `;
  
    form.onsubmit = (e) => {
      e.preventDefault();
      alert("Form submitted!");
    };
  
    document.body.appendChild(form);
  };