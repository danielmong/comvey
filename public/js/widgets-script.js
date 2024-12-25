$(document).ready(function () {
    let data = {
        email: {
            show: false,
            content: ""
        },
        whatsapp: {
            show: false,
            content: ""
        },
        messenger: {
            show: false,
            content: ""
        },
        links: {
            show: false,
            content: []
        },
        products: {
            show: false,
            content: []
        }
    };

    $(".wca-switch").click(function () {
        $(this).toggleClass('justify-end');

        let expanded = $(this).data('expanded');
        let contentId = $(this).data('content');
        let target = $(this).data('target');

        if (expanded == 'true') {
            // Style Script
            $(this).data('expanded', 'false');
            $(this).removeClass('bg-primary-500');
            $(this).addClass('bg-slate-600');
            $(`#${contentId}`).css('height', '0px');

            // Widget Control Script
            if (target == 'contact-form') {
                $('.cv-widget-container').hide();
                data.email.show = false;
            }

            if (target == 'whatsapp') {
                $("#whatsapp-container").hide();
                data.whatsapp.show = false;
            }

            if (target == 'messenger') {
                $("#messenger-container").hide();
                data.messenger.show = false;
            }

            if (target == 'links') {
                $("#links-container").hide();
                data.links.show = false;
            }

            if (target == 'product') {
                data.products.show = false;
            }

        } else {
            // Style Script
            $(this).data('expanded', 'true');
            $(this).addClass('bg-primary-500');
            $(this).removeClass('bg-slate-600');
            $(`#${contentId}`).css('height', 'auto');

            // Widget Control Script
            if (target == 'contact-form') {
                $('.cv-widget-container').show();
                data.email.show = true;
            }

            if (target == 'whatsapp') {
                $("#whatsapp-container").css("display", "flex");
                data.whatsapp.show = true;
            }

            if (target == 'messenger') {
                $("#messenger-container").css("display", "flex");
                data.messenger.show = true;
            }

            if (target == 'links') {
                $("#links-container").css("display", "flex");
                data.links.show = true;
            }

            if (target == 'product') {
                data.products.show = true;
            }
        }
    })  



    $('#wca-input-whatsapp').on('input', function () {
        $("#whatsapp-container").attr("href", $(this).val());
        data.whatsapp.content = $(this).val();
    })
    $('#wca-input-messenger').on('input', function () {
        $("#messenger-container").attr("href", $(this).val());
        data.messenger.content = $(this).val();
    })
    $("#wca-input-email").on("input", function () {
        data.email.content = $(this).val();
    })

    let numOfLinks = 0;

    $("#wca-link-add-btn").on('click', function () {
        numOfLinks++;

        data.links.content.push({ name: "", url: "" });

        let newLinkMakerItem = `
            <div class="mt-3" id="custom-link-item-${numOfLinks}">
                <div class="wca-link-url">
                    <label class="text-sm">
                        Link-${numOfLinks} Url
                    </label>
                    <input
                        type="text"
                        class="border rounded-md outline-none px-3 py-1.5 w-full text-sm mt-1 wca-input-link-url"
                        id="wca-input-link${numOfLinks}-url"
                        data-id="${numOfLinks}" />
                </div>
                <div class="wca-link-name">
                    <label class="text-sm">Link-${numOfLinks} Name</label>
                    <input
                        type="text"
                        class="border rounded-md outline-none px-3 py-1.5 w-full text-sm mt-1 wca-input-link-name"
                        id="wca-input-link${numOfLinks}-name"
                        data-id="${numOfLinks}" />
                </div>
            </div>`;

        let newLinkItem = `
            <a class="wc-inner-item" id="link${numOfLinks}-container">
                <div class="wc-inner-item-label">
                    <span class="label">

                    </span>
                </div>
                <div class="wc-inner-item-go-icon">
                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                </div>
            </a>`;
        
        $(this).before(newLinkMakerItem)
        $(".wc-links").append(newLinkItem);

        $(`#wca-input-link${numOfLinks}-url`).on("input", function () {
            let linkId = $(this).data("id");
            $(`#link${linkId}-container`).attr("href", $(this).val());

            data.links.content[Number(linkId) - 1].url = $(this).val();
        })
    
        $(`#wca-input-link${numOfLinks}-name`).on("input", function () {
            let linkId = $(this).data("id");
            $(`#link${linkId}-container .label`).html($(this).val());
            data.links.content[Number(linkId) - 1].name = $(this).val();
        })

    })
    
    $("#delete-link").on("click", function () {
        if (numOfLinks) {
            $(`#custom-link-item-${numOfLinks}`).remove();
            $(`#link${numOfLinks}-container`).remove();
            data.links.content.pop();
            numOfLinks--;
        }
    })

    let numOfProducts = 0;
    $("#wca-product-add-btn").on("click", function () {
        numOfProducts++;

        data.products.content.push({ name: "", url: "", imgurl: "", description: "", price: "", oldPrice: "" });

        let newProductMakerItem = `
            <div class="mt-3" id="product-item-${numOfProducts}">
                <div class="wca-product-url">
                    <label class="text-sm">
                        Product-${numOfProducts} Url
                    </label>
                    <input
                        type="text"
                        class="border rounded-md outline-none px-3 py-1.5 w-full text-sm mt-1 wca-input-product-url"
                        id="wca-input-product${numOfProducts}-url"
                        data-id="${numOfProducts}" />
                </div>
                <div class="wca-product-name">
                    <label class="text-sm">Product-${numOfProducts} Name</label>
                    <input
                        type="text"
                        class="border rounded-md outline-none px-3 py-1.5 w-full text-sm mt-1 wca-input-product-name"
                        id="wca-input-product${numOfProducts}-name"
                        data-id="${numOfProducts}" />
                </div>
                <div class="wca-product-description">
                    <label class="text-sm">Product-${numOfProducts} Description</label>
                    <input
                        type="text"
                        class="border rounded-md outline-none px-3 py-1.5 w-full text-sm mt-1 wca-input-product-description"
                        id="wca-input-product${numOfProducts}-description"
                        data-id="${numOfProducts}" />
                </div>
                <div class="wca-product-imgurl">
                    <label class="text-sm">Product-${numOfProducts} Image Url</label>
                    <input
                        type="text"
                        class="border rounded-md outline-none px-3 py-1.5 w-full text-sm mt-1 wca-input-product-imgurl"
                        id="wca-input-product${numOfProducts}-imgurl"
                        data-id="${numOfProducts}" />
                </div>
                <div class="wca-product-price">
                    <label class="text-sm">Product-${numOfProducts} Price</label>
                    <input
                        type="text"
                        class="border rounded-md outline-none px-3 py-1.5 w-full text-sm mt-1 wca-input-product-price"
                        id="wca-input-product${numOfProducts}-price"
                        data-id="${numOfProducts}" />
                </div>
                <div class="wca-product-oldprice">
                    <label class="text-sm">Product-${numOfProducts} Old Price</label>
                    <input
                        type="text"
                        class="border rounded-md outline-none px-3 py-1.5 w-full text-sm mt-1 wca-input-product-oldprice"
                        id="wca-input-product${numOfProducts}-oldprice"
                        data-id="${numOfProducts}" />
                </div>
            </div>`;

        let newProductItemContent = `
            <div class="wc-product-item">
                <div class="wc-product-item-image">
                    <img src="https://placehold.co/600x400.png" id="product${numOfProducts}-imgurl">
                </div>
                <div class="wc-product-info">
                    <span class="wc-product-name" id="product${numOfProducts}-name">Product-${numOfProducts}</span>
                    <div class="wc-product-price">
                        <span class="wc-product-price" id="product${numOfProducts}-price">Price</span>
                        <span class="wc-product-oldprice" id="product${numOfProducts}-oldprice">Old Price</span>
                    </div>
                </div>
                <p class="wc-product-description" id="product${numOfProducts}-description">Product-${numOfProducts}'s Description</p>
                <a class="wc-product-show-btn" id="product${numOfProducts}-url" href="">Shop Now</a>
            </div>
        `;

        $(this).before(newProductMakerItem)
        let newProductItem = document.createElement("div");
        newProductItem.innerHTML = newProductItemContent;

        $('#slick').slick('slickAdd', newProductItem);

        $(`#wca-input-product${numOfProducts}-url`).on("input", function () {
            let productId = $(this).data("id");
            $(`#product${productId}-url`).attr("href", $(this).val());
            data.products.content[Number(productId) - 1].url = $(this).val();
        })
        $(`#wca-input-product${numOfProducts}-name`).on("input", function () {
            let productId = $(this).data("id");
            $(`#product${productId}-name`).html($(this).val() ? $(this).val() : `Product-${productId}`);
            data.products.content[Number(productId) - 1].name = $(this).val();
        })
        $(`#wca-input-product${numOfProducts}-description`).on("input", function () {
            let productId = $(this).data("id");
            $(`#product${productId}-description`).html($(this).val() ? $(this).val() : `Product-${productId}'s Description`);
            data.products.content[Number(productId) - 1].description = $(this).val();
        })
        $(`#wca-input-product${numOfProducts}-imgurl`).on("input", function () {
            let productId = $(this).data("id");
            $(`#product${productId}-imgurl`).attr("src", $(this).val() ? $(this).val() : `https://placehold.co/600x400.png`);
            data.products.content[Number(productId) - 1].imgurl = $(this).val();
        })
        $(`#wca-input-product${numOfProducts}-price`).on("input", function () {
            let productId = $(this).data("id");
            $(`#product${productId}-price`).html($(this).val() ? $(this).val() : `price`);
            data.products.content[Number(productId) - 1].price = $(this).val();
        })
        $(`#wca-input-product${numOfProducts}-oldprice`).on("input", function () {
            let productId = $(this).data("id");
            $(`#product${productId}-oldprice`).html($(this).val() ? $(this).val() : `old price`);
            data.products.content[Number(productId) - 1].oldprice = $(this).val();
        })
    })

    $("#delete-product").on("click", function () {
        if (numOfProducts) {
            $(`#product-item-${numOfProducts}`).remove();
            $("#slick").slick("slickRemove", numOfProducts - 1);
            data.products.content.pop();
            numOfProducts--;
        }
    })

    $("#copy-code-btn").on("click", function () {
        if (data.email.show == false) {
            new AWN().info('No widget created!');
            return;
        } else {
            let code = "";
            let serverUrl = "http://localhost:8000";

            code += `<link rel="stylesheet" href="${serverUrl}/css/widgets.css">`;
            code += `<script type="text/javascript" src="${serverUrl}/js/widgets.js"></script>`;
            code += `<script type="text/javascript" src="${serverUrl}/js/embed.js"></script>`;
            
            code += `<script>`
            if (data.whatsapp.show) {
                code += `
                    new CustomLet({
                        widgetType: 'whatsapp',
                        options: {
                            phone: '${data.whatsapp.content}',
                            message: 'Hello! How can we help you?',
                        },
                    });
                `
            }
            if (data.messenger.show) {
                code += `
                    new CustomLet({
                        widgetType: 'messenger',
                        options: {
                            phone: '${data.messenger.content}',
                            message: 'Hello! How can we help you?',
                        },
                    });
                `
            }
            if (data.links.show) {
                let links = data.links.content.map(item => ({ text: item.name, url: item.url }));
                code += `
                    new CustomLet({
                    widgetType: 'links',
                    options: {
                        links: ${JSON.stringify(links)}
                    },
                });
                `
            }

            if (data.products.show) {
                code = `
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick-theme.min.css" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.js"></script>
                ` + code;

                code += `
                    new CustomLet({
                        widgetType: 'product',
                        options: {
                            products: ${JSON.stringify(data.products.content)}
                        }
                    })
                `
            }

            code += `</script>`;

            

            navigator.clipboard.writeText(code);

            new AWN().success('Code Copied! Paste in your code.')
        }
    })

    $(".wca-switch[data-target='contact-form']").trigger("click");
    $(".cv-widget-container-open-btn").trigger("click");

    $("#slick").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
    });
})