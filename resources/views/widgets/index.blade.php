<x-layouts.app>
    <x-slot name="title">
        {{ __('Widgets') }}
    </x-slot>

    <link rel="stylesheet" href="{{ asset('css/demo-widgets.css') }}">



    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="w-full flex gap-4">
            <div class="w-80 flex flex-col gap-4">


                <div class="widget-card w-full flex flex-col border px-3 py-2 rounded-md">
                    <div class="widget-card-header flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="w-5 h-5 mr-2">
                                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                                </svg>
                            </span>
                            <span class="">Contact Form</span>
                        </div>
                        <div class="cursor-pointer rounded-full border w-12 box flex items-center px-0.5 py-0.5 bg-slate-600 wca-switch" data-expanded="true" data-content="wca-content-contact-form" data-target="contact-form">
                            <div class="w-5 h-5 rounded-full border bg-white"></div>
                        </div>
                    </div>
                    <div class="widget-card-content h-0 overflow-hidden transition-all duration-200" id="wca-content-contact-form">
                        <div class="mt-3">
                            <label class="text-sm">Email Address</label>
                            <input
                                type="email"
                                class="border rounded-md outline-none px-3 py-1.5 w-full text-sm mt-1"
                                id="wca-input-email" />
                        </div>
                    </div>
                </div>

                <div class="widget-card w-full flex flex-col border px-3 py-2 rounded-md">
                    <div class="widget-card-header flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="w-5 h-5 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                    <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#0F0F0F" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#0F0F0F" />
                                </svg>
                            </span>
                            <span class="">WhatsApp</span>
                        </div>
                        <div class="cursor-pointer rounded-full border w-12 box flex items-center px-0.5 py-0.5 bg-slate-600 wca-switch" data-expanded="true" data-content="wca-content-whatsapp" data-target="whatsapp">
                            <div class="w-5 h-5 rounded-full border bg-white"></div>
                        </div>
                    </div>
                    <div class="widget-card-content h-0 overflow-hidden transition-all duration-200" id="wca-content-whatsapp">
                        <div class="mt-3">
                            <label class="text-sm">WhatsApp Number</label>
                            <input
                                type="text"
                                class="border rounded-md outline-none px-3 py-1.5 w-full text-sm mt-1"
                                id="wca-input-whatsapp" />
                        </div>
                    </div>
                </div>

                <div class="widget-card w-full flex flex-col border px-3 py-2 rounded-md">
                    <div class="widget-card-header flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="w-5 h-5 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                                    <path d="M17.3 9.6C17.6314 9.15817 17.5418 8.53137 17.1 8.2C16.6582 7.86863 16.0314 7.95817 15.7 8.4L13.3918 11.4776L11.2071 9.29289C11.0021 9.08791 10.7183 8.98197 10.4291 9.00252C10.1399 9.02307 9.87393 9.16809 9.7 9.4L6.7 13.4C6.36863 13.8418 6.45817 14.4686 6.9 14.8C7.34183 15.1314 7.96863 15.0418 8.3 14.6L10.6082 11.5224L12.7929 13.7071C12.9979 13.9121 13.2817 14.018 13.5709 13.9975C13.8601 13.9769 14.1261 13.8319 14.3 13.6L17.3 9.6Z" fill="#0F0F0F" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#0F0F0F" />
                                </svg>
                            </span>
                            <span class="">Messenger</span>
                        </div>
                        <div class="cursor-pointer rounded-full border w-12 box flex items-center px-0.5 py-0.5 bg-slate-600 wca-switch" data-expanded="true" data-content="wca-content-messenger" data-target="messenger">
                            <div class="w-5 h-5 rounded-full border bg-white"></div>
                        </div>
                    </div>
                    <div class="widget-card-content h-0 overflow-hidden transition-all duration-200" id="wca-content-messenger">
                        <div class="mt-3">
                            <label class="text-sm">Messenger ID</label>
                            <input
                                type="text"
                                class="border rounded-md outline-none px-3 py-1.5 w-full text-sm mt-1"
                                id="wca-input-messenger" />
                        </div>
                    </div>
                </div>

                <div class="widget-card w-full flex flex-col border px-3 py-2 rounded-md">
                    <div class="widget-card-header flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="w-5 h-5 mr-2">
                                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"></path>
                                </svg>
                            </span>
                            <span class="">Custom Links</span>
                            <span class="ml-3 cursor-pointer hover:underline text-xs" id="delete-link">Delete</span>
                        </div>
                        <div class="cursor-pointer rounded-full border w-12 box flex items-center justify-start px-0.5 py-0.5 bg-slate-600 wca-switch" data-expanded="true" data-content="wca-content-links" data-target="links">
                            <div class="w-5 h-5 rounded-full border bg-white"></div>
                        </div>
                    </div>
                    <div class="widget-card-content h-0 overflow-hidden transition-all duration-200" id="wca-content-links">
                        <button class="w-full rounded-md border flex items-center mt-3 py-2 justify-center bg-slate-700 hover:bg-slate-500" id="wca-link-add-btn">
                            <span class="text-sm text-white">Add One</span>
                            <span class="block w-5 h-5 ml-2 text-white">
                                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div class="widget-card w-full flex flex-col border px-3 py-2 rounded-md">
                    <div class="widget-card-header flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="w-5 h-5 mr-2">
                                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
                                </svg>
                            </span>
                            <span class="">Product Cards</span>
                            <span class="ml-3 cursor-pointer hover:underline text-xs" id="delete-product">Delete</span>
                        </div>
                        <div class="cursor-pointer rounded-full border w-12 box flex items-center justify-start px-0.5 py-0.5 bg-slate-600 wca-switch" data-expanded="true" data-content="wca-content-product" data-target="product">
                            <div class="w-5 h-5 rounded-full border bg-white"></div>
                        </div>
                    </div>
                    <div class="widget-card-content h-0 overflow-hidden transition-all duration-200" id="wca-content-product">
                        <button class="w-full rounded-md border flex items-center mt-3 py-2 justify-center bg-slate-700 hover:bg-slate-500" id="wca-product-add-btn">
                            <span class="text-sm text-white">Add One</span>
                            <span class="block w-5 h-5 ml-2 text-white">
                                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>


            </div>


            <div class="flex-1 relative h-[800px] overflow-hidden border" id="demo-container">
                <!-- <h1 class="absolute left-1/2 transform -translate-x-1/2 bg-black/80 px-10 py-4 text-3xl text-white rounded-b-lg w-full text-center">This is showcase</h1> -->
                <div class="absolute top-2 right-2 bg-primary-600 hover:bg-primary-500 px-3 py-1.5 rounded-md cursor-pointer text-white text-sm" id="copy-code-btn">Copy Code</div>
                <img src="{{ asset('images/demo.jpg')}}" />
            </div>
        </div>
    </div>
    <script src="{{ asset('js/widgets-script.js') }}"></script>
    <script src="{{ asset('js/demo-widgets.js') }}"></script>
</x-layouts.app>