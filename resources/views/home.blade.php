<x-layouts.app>
    <x-slot name="title">
        {{ __('EditNow') }}
    </x-slot>

    <x-section.hero class="w-full mb-8 md:mb-72">
        <div class="mx-auto text-center h-160 md:h-180 px-4">
            <x-pill class="text-primary-500 bg-primary-50">{{ __('Launch your Code') }}</x-pill>
            <x-heading.h1 class="mt-4 text-primary-50 font-bold">
                {{ __('Code Preview') }}
                <br class="hidden sm:block">
                {{ __('All in One Place') }}

            </x-heading.h1>

            <p class="text-primary-50 m-3">{{ __('An ultimate online code editor and playground for frontend developers.') }}</p>

            <div class="flex flex-wrap gap-4 justify-center flex-col md:flex-row mt-6">
                <x-effect.glow></x-effect.glow>

                <x-button-link.secondary href="" class="self-center !py-3" elementType="a">
                    {{ __('Start Coding for Free') }}
                </x-button-link.secondary>
                <x-button-link.primary-outline href="" class=" bg-transparent self-center !py-3 text-white border-white" rel=”nofollow”>
                    {{ __('Explore Public Projects') }}
                </x-button-link.primary-outline>

            </div>

            <x-user-ratings link="#testimonials" class="items-center justify-center mt-6 relative z-40">
                <x-slot name="avatars">
                    <x-user-ratings.avatar src="https://unsplash.com/photos/rDEOVtE7vOs/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fHx8MTcxMzY4NDI1MHww&force=true&w=640" alt="testimonial 1" />
                    <x-user-ratings.avatar src="https://unsplash.com/photos/c_GmwfHBDzk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8cGVyc29ufGVufDB8fHx8MTcxMzY4NDI1MHww&force=true&w=640" alt="testimonial 2" />
                    <x-user-ratings.avatar src="https://unsplash.com/photos/QXevDflbl8A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cGVyc29ufGVufDB8fHx8MTcxMzY4NDI1MHww&force=true&w=640" alt="testimonial 3" />
                    <x-user-ratings.avatar src="https://unsplash.com/photos/mjRwhvqEC0U/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fHx8MTcxMzY4NDI1MHww&force=true&w=640" alt="testimonial 4" />
                    <x-user-ratings.avatar src="https://unsplash.com/photos/C8Ta0gwPbQg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHx8fDE3MTM2ODQyNTB8MA&force=true&w=640" alt="testimonial 5" />
                </x-slot>

                {{ __('EditNow has transformed the way I code and collaborate! The real-time preview is a game-changer.') }}
            </x-user-ratings>

            <div class="mx-auto md:max-w-3xl lg:max-w-5xl">
                <div class="drop-shadow-2xl mt-8 rounded-2xl h-[700px] bg-white w-full px-4 py-1">
                    @foreach($codepens as $item)
                    <x-codepen.codepen-item :item="$item"></x-codepen-item>
                        @endforeach
                </div>
            </div>
        </div>
    </x-section.hero>

    <div class="preview-modal hidden w-full h-screen fixed top-0 bg-black/80 transition-all duration-300 py-[5%] z-50">

        <div class="w-[80%] h-full bg-white mx-auto align-middle rounded relative">
            <div class="absolute right-2 top-2 flex">
                <x-button-link.primary class=" close">
                    <i class="fa fa-close"></i>
                    <span class="text-sm ml-2">Close</span>
                </x-button-link.primary>
            </div>
            <iframe class="w-full h-full" id="preview"></iframe>
        </div>
    </div>

    <x-section.columns class="max-w-none md:max-w-6xl pt-4" id="features">

    </x-section.columns>

    <script src="{{ asset('js/codepen/list.js') }}"></script>
</x-layouts.app>