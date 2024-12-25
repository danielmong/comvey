window.CustomLetWidgets = window.CustomLetWidgets || {};
window.CustomLetWidgets["product"] = function (options) {
  const { products } = options;

  const container = document.createElement("div");


  container.id = "slick";

  products.forEach(({ name, url, imgurl, description, price, oldprice }) => {
    const product = document.createElement("div");
    let newProductItemContent = `
            <div class="wc-product-item">
                <div class="wc-product-item-image">
                    <img src="${imgurl ? imgurl : `https://placehold.co/600x400.png`}">
                </div>
                <div class="wc-product-info">
                    <span class="wc-product-name">${name}</span>
                    <div class="wc-product-price">
                        <span class="wc-product-price"">${price}</span>
                        <span class="wc-product-oldprice">${oldprice}</span>
                    </div>
                </div>
                <p class="wc-product-description">${description}</p>
                <a class="wc-product-show-btn" href="${url}">Shop Now</a>
            </div>
        `;

    product.innerHTML = newProductItemContent;
    container.append(product);
  });

  document.getElementById("wc-home-content").append(container);

  $("#slick").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
  });
};