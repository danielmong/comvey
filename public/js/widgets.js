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
                        <span class="title">Hello, nice to see you here</span>
                        

                        <div class="cv-widget-container-main-content-home-content" id="wc-home-content">
                        
                        
                            <div class="wc-inner-item wc-email-us">
                                <button class="wc-contact-us-btn" id="wc-contact-us-btn">Contact us</button>
                            </div>

                            
                        </div>


                    </div>
                    <div class="cv-widget-container-main-content-contact" id="wc-content-contact">
                        <span class="title">Contact us</span>
                        

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
    document.body.appendChild(containerElement);
    initEventListener();
})()