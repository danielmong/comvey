$(document).ready(function () {
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
            }

            if (target == 'whatsapp') {
                $("#whatsapp-container").hide();
            }

            if (target == 'messenger') {
                $("#messenger-container").hide();
            }

            if (target == 'links') {
                $("#links-container").hide();
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
            }

            if (target == 'whatsapp') {
                $("#whatsapp-container").css("display", "flex");
            }

            if (target == 'messenger') {
                $("#messenger-container").css("display", "flex");
            }

            if (target == 'links') {
                $("#links-container").css("display", "flex");
            }
        }
    })  



    $('#wca-input-whatsapp').on('input', function () {
        $("#whatsapp-container").attr("href", $(this).val());
    })
    $('#wca-input-messenger').on('input', function () {
        $("#messenger-container").attr("href", $(this).val());
    })

    let numOfLinks = 0;

    $("#wca-link-add-btn").on('click', function () {
        numOfLinks++;

        let newLinkMakerItem = `
            <div class="mt-3" id="custom-link-item-${numOfLinks}">
                <div class="wca-link-url">
                    <label class="text-sm">
                        Link-${numOfLinks} Url

                        <span class="ml-3 cursor-pointer hover:underline" id="delete-${numOfLinks}">Delete</span>
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
        })
    
        $(`#wca-input-link${numOfLinks}-name`).on("input", function () {
            let linkId = $(this).data("id");
            $(`#link${linkId}-container .label`).html($(this).val());
        })

        $(`#delete-${numOfLinks}`).on('click', function () {
            $(`#custom-link-item-${numOfLinks}`).remove();
            $(`#link${numOfLinks}-container`).remove();
            numOfLinks--;
        })

    })
})