window.CustomLetWidgets = window.CustomLetWidgets || {};
window.CustomLetWidgets["product"] = function (options) {
  const { products } = options;

  const container = document.createElement("div");


  container.id = "wc-slick";

  links.forEach(({ text, url }) => {
    const link = document.createElement("a");
    link.classList.add("wc-inner-item");

    link.innerHTML = `
      <div class="wc-inner-item-label">
          <span class="label">
              ${text}
          </span>
      </div>
      <div class="wc-inner-item-go-icon">
          <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
          </svg>
      </div>
    `

    link.href = url;
    container.appendChild(link);
  });

  console.log(container);


  document.getElementById("wc-home-content").append(container);
};