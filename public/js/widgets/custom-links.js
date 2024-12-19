window.CustomLetWidgets = window.CustomLetWidgets || {};
window.CustomLetWidgets["custom-links"] = function (options) {
    const { links } = options;
  
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
  
    links.forEach(({ text, url }) => {
      const link = document.createElement("a");
      link.href = url;
      link.textContent = text;
      link.style.margin = "5px 0";
      container.appendChild(link);
    });
  
    document.body.appendChild(container);
  };