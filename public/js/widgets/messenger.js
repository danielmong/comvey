window.CustomLetWidgets = window.CustomLetWidgets || {};
window.CustomLetWidgets["messenger"] = function (options) {
    const { phone, message } = options;
    const widget = document.createElement("a");

    widget.classList.add("wc-inner-item");
    widget.href = `https://me.me/${phone}?text=${encodeURIComponent(message)}`;
    widget.target = '_black';

    let content = `
        <div class="wc-inner-item-label">
            <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 32 32" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 28.1791C23.1797 28.1791 29 22.5426 29 15.5896C29 8.63654 23.1797 3 16 3C8.8203 3 3 8.63654 3 15.5896C3 19.3712 4.72168 22.7634 7.44737 25.0711V27.6188C7.44737 28.6145 8.4616 29.2824 9.36588 28.8821L12.193 27.6307C13.397 27.9873 14.6754 28.1791 16 28.1791Z" fill="url(#paint0_linear_87_7239)"/>
                    <path d="M12.887 12.9133L9.11723 18.0689C8.71304 18.6217 9.43994 19.2858 9.99334 18.8693L13.2123 16.4469C13.5399 16.2003 13.9992 16.197 14.3307 16.4388L17.1935 18.5272C17.7425 18.9277 18.5272 18.8125 18.9269 18.2727L22.8805 12.9341C23.2905 12.3804 22.558 11.7109 22.0038 12.1328L18.6006 14.7236C18.2729 14.9731 17.8112 14.9777 17.4782 14.7347L14.6247 12.6531C14.0733 12.2509 13.285 12.369 12.887 12.9133Z" fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear_87_7239" x1="16" y1="3" x2="11.8286" y2="28.8583" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00B1FF"/>
                    <stop offset="1" stop-color="#006BFF"/>
                    </linearGradient>
                    </defs>
                </svg>
            </span>
            <span class="label">
                Messenger
            </span>
        </div>
        <div class="wc-inner-item-go-icon">
            <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
            </svg>
        </div>
  `;

    widget.innerHTML = content;

    document.getElementById("wc-contact-content").append(widget);
};