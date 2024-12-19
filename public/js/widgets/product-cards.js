window.CustomLetWidgets = window.CustomLetWidgets || {};
window.CustomLetWidgets["product-cards"] = function (options) {
    const { products } = options;
  
    const container = document.createElement("div");
    container.style.display = "flex";
  
    products.forEach(({ name, price, image }) => {
      const card = document.createElement("div");
      card.innerHTML = `
        <img src="${image}" alt="${name}" />
        <h3>${name}</h3>
        <p>$${price}</p>
      `;
      card.style.border = "1px solid #ccc";
      card.style.margin = "10px";
      card.style.padding = "10px";
      container.appendChild(card);
    });
  
    document.body.appendChild(container);
  };