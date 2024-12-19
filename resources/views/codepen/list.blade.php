<x-layouts.app>
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="">
            <div class="text-center pt-4 pb-0 md:pt-12 md:mb-10">
                <x-heading.h1 class="font-semibold !text-4xl">
                    {{ __('Codepen Lists') }}
                </x-heading.h1>
                <p class="pt-4">
                    {{ __('Here you can explore so many useful code examples from others.') }}
                </p>

            </div>


            @if(count($codepens) > 0)
            <div class="mx-auto max-w-4xl mt-16">
                @foreach($codepens as $item)
                <x-codepen.codepen-item :item="$item"></x-codepen-item>
                @endforeach
            </div>
            @else
            <div class="mx-auto max-w-4xl mt-16">
                <h4 class="text-center">There is no codepen.</>
            </div>
            @endif

            <div class="mt-4">
                {{ $codepens-> links() }}
            </div>
        </div>
    </div>

    <div class="preview-modal hidden w-full h-screen fixed top-0 bg-black/80 transition-all duration-300 py-[5%]">

        <div class="w-[80%] h-full bg-white mx-auto align-middle rounded relative">
            <div class="absolute right-2 top-2 flex">
                <x-button-link.primary-outline class="copy mr-2">
                    <i class="fa fa-copy"></i>
                    <span class="text-sm ml-2">Make a Copy</span>
                </x-button-link.primary-outline>
                <x-button-link.primary-outline class="close">
                    <i class="fa fa-close"></i>
                    <span class="text-sm ml-2">Close</span>
                </x-button-link.primary-outline>
            </div>
            <iframe class="w-full h-full" id="preview"></iframe>
        </div>
    </div>

    <script src="{{ asset('js/codepen/list.js') }}"></script>

</x-layouts.app>