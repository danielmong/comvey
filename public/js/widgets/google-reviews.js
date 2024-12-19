window.CustomLetWidgets = window.CustomLetWidgets || {};
window.CustomLetWidgets["google-reviews"] = function (options) {
    const { placeId, apiKey } = options;
  
    const container = document.createElement("div");
    container.className = "google-reviews-widget";
  
    fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        const reviews = data.result.reviews || [];
        reviews.forEach((review) => {
          const reviewDiv = document.createElement("div");
          reviewDiv.innerHTML = `<p>${review.text}</p><small>— ${review.author_name}</small>`;
          container.appendChild(reviewDiv);
        });
        document.body.appendChild(container);
      })
      .catch((error) => console.error("Error loading Google Reviews:", error));
  };