(function initContainer() {
    function initEventListener() {
        let openButton = document.getElementById("wc-open-btn");
        let hideButton = document.getElementById("wc-minimize-btn");

        let homeButton = document.getElementById("wc-home-btn");
        let contactButton = document.getElementById("wc-contact-btn");
        let emailUsButton = document.getElementById("email-us-btn");
        let contactUsButton = document.getElementById("wc-contact-us-btn");
        let returnButton = document.getElementById("wc-return-btn");

        openButton.addEventListener("click", showWidgetContainer);
        hideButton.addEventListener("click", hideWidgetContainer);

        homeButton.addEventListener("click", showHomePanel);
        contactButton.addEventListener("click", showContactPanel);
        contactUsButton.addEventListener("click", showContactPanel);
        emailUsButton.addEventListener("click", showContactForm);
        returnButton.addEventListener("click", showHomePanel);
    }


    function showWidgetContainer() {
        let container = document.getElementById("widget-main");
        let content = document.getElementById("widget-content");
        let openButton = document.getElementById("wc-open-btn");

        openButton.style.transform = `translateY(120px)`;

        setTimeout(() => {
            container.style.width = '360px';
            container.style.height = '600px';
        }, 300);

        setTimeout(() => {
            content.style.display = "block";
        }, 600);
    }

    function hideWidgetContainer() {
        let container = document.getElementById("widget-main");
        let openButton = document.getElementById("wc-open-btn");
        let content = document.getElementById("widget-content");

        content.style.display = "none";
        container.style.width = '0px';
        container.style.height = '0px';

        setTimeout(() => {
            openButton.style.transform = `translateY(0px)`;
        }, 300);
    }

    function showHomePanel() {
        let returnBtn = document.getElementById("wc-return-btn");
        let homeButton = document.getElementById("wc-home-btn");
        let contactButton = document.getElementById("wc-contact-btn");
        let homeContent = document.getElementById("wc-content-home");
        let contactContent = document.getElementById("wc-content-contact");
        let contactFormContent = document.getElementById("wc-content-form");

        homeContent.style.display = "block";
        contactFormContent.style.display = "none";
        contactContent.style.display = "none";
        returnBtn.style.visibility = "hidden";

        homeButton.style.opacity = "1";
        contactButton.style.opacity = "0.5";
    }

    function showContactPanel() {
        let returnBtn = document.getElementById("wc-return-btn");
        let homeButton = document.getElementById("wc-home-btn");
        let contactButton = document.getElementById("wc-contact-btn");
        let homeContent = document.getElementById("wc-content-home");
        let contactContent = document.getElementById("wc-content-contact");
        let contactFormContent = document.getElementById("wc-content-form");

        homeContent.style.display = "none";
        contactFormContent.style.display = "none";
        contactContent.style.display = "block";
        returnBtn.style.visibility = "visible";

        homeButton.style.opacity = "0.5";
        contactButton.style.opacity = "1";
    }

    function showContactForm() {
        let returnBtn = document.getElementById("wc-return-btn");
        let homeButton = document.getElementById("wc-home-btn");
        let contactButton = document.getElementById("wc-contact-btn");
        let homeContent = document.getElementById("wc-content-home");
        let contactContent = document.getElementById("wc-content-contact");
        let contactFormContent = document.getElementById("wc-content-form");

        homeContent.style.display = "none";
        contactFormContent.style.display = "flex";
        contactContent.style.display = "none";
        returnBtn.style.visibility = "visible";

        homeButton.style.opacity = "0.5";
        contactButton.style.opacity = "0.5";
    }


    let containerElement = document.createElement("div");
    containerElement.classList.add("cv-widget-container");

    let containerElementConetent = "";

    containerElementConetent += `
        <button class="cv-widget-container-open-btn" id="wc-open-btn">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"></path>
            </svg>
        </button>
        <div class="cv-widget-container-main" id="widget-main">
            <div id="widget-content">
                <div class="cv-widget-contaner-main-header">
                    <div class="cv-w-h-action-btn" id="wc-return-btn">
                        <svg data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"></path>
                        </svg>
                    </div>
                    <div class="cv-w-h-action-btn" id="wc-minimize-btn">
                        <svg data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"></path>
                        </svg>
                    </div>
                </div>

                <div class="cv-widget-container-main-content">
                    <div class="cv-widget-container-main-content-home" id="wc-content-home">
                        <span class="title">Hello, nice to see you here 👋</span>
                        

                        <div class="cv-widget-container-main-content-home-content" id="wc-home-content">
                        
                        
                            <div class="wc-inner-item wc-email-us">
                                <button class="wc-contact-us-btn" id="wc-contact-us-btn">Contact us</button>
                            </div>

                            <div class="wc-links" id="links-container">
                                
                            </div>
                        
                            <div id="product-container">
                                <div id="slick">
                                    
                                </div>
                            </div>

                        </div>


                    </div>
                    <div class="cv-widget-container-main-content-contact" id="wc-content-contact">
                        <span class="title">Contact us 👋</span>
                        

                        <div class="cv-widget-container-main-content-contact-content" id="wc-contact-content">
                        
                        
                            <div class="wc-inner-item" id="email-us-btn">
                                <div class="wc-inner-item-label">
                                    <span class="icon">
                                        <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                                        </svg>
                                    </span>
                                    <span class="label">
                                        Email us
                                    </span>
                                </div>
                                <div class="wc-inner-item-go-icon">
                                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                    </svg>
                                </div>
                            </div>

                            <a class="wc-inner-item" id="whatsapp-container" href="">
                                <div class="wc-inner-item-label">
                                    <span class="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 58 58" xml:space="preserve">
                                            <g>
                                                <path style="fill:#2CB742;" d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5   S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"/>
                                                <path style="fill:#FFFFFF;" d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42   c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242   c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169   c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097   c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"/>
                                            </g>
                                        </svg>
                                    </span>
                                    <span class="label">
                                        WhatsApp
                                    </span>
                                </div>
                                <div class="wc-inner-item-go-icon">
                                    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                    </svg>
                                </div>
                            </a>

                            <a class="wc-inner-item" id="messenger-container" href="">
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
                            </a>

                        
                        
                        </div>


                    </div>

                    <div class="cv-widget-container-main-content-form" id="wc-content-form">
                    
                        <div class="cv-widget-container-main-content-form-item">
                            <label htmlFor="name">What is your name</label>
                            <input type="text" >
                        </div>

                        <div class="cv-widget-container-main-content-form-item">
                            <label htmlFor="name">What is your email</label>
                            <input type="text" >
                        </div>

                        <div class="cv-widget-container-main-content-form-item">
                            <label htmlFor="name">How can we help you</label>
                            <textarea type="text" rows="5"></textarea>
                        </div>

                        <button class="cv-widget-container-main-content-form-submit">
                            <span class="label">
                                Send Message
                            </span>
                            <span class="icon">
                                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"></path>
                                </svg>
                            </span>
                        </button>

                    </div>
                </div>

                <div class="cv-widget-container-main-footer">
                    <div class="cv-widget-container-main-footer-action">
                        <div class="cv-w-f-action-btn" id="wc-home-btn">
                            <svg data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"></path>
                            </svg>
                            <span class="cv-w-f-action-btn-label">
                                Home
                            </span>
                        </div>
                        <div class="cv-w-f-action-btn" id="wc-contact-btn">
                            <svg data-slot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M3.505 2.365A41.369 41.369 0 0 1 9 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 0 0-.577-.069 43.141 43.141 0 0 0-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 0 1 5 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914Z"></path>
                                <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 0 0 1.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0 0 14 6Z"></path>
                            </svg>
                            <span class="cv-w-f-action-btn-label">
                                Contact
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

    containerElement.innerHTML = containerElementConetent;
    document.getElementById("demo-container").appendChild(containerElement);
    initEventListener();
})()