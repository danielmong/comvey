<x-layouts.app>
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="bg-white w-full py-1">
            <x-input.field label="{{ __('Title of Code') }}" type="text" name="title" id="title"
                required autofocus="true" class="my-2"
                value="{{ $codepen->title }}{{ $codepen->user_id != auth()->id() ? '-Copy' : '' }}"
                autocomplete="email" max-width="w-full" />
            <!-- <input type="text" id="title" class="border outline-none rounded px-2 py-1 text-sm w-60" placeholder="Title of Code" /> -->
            <!-- <input type="text" id="desc" class="border outline-none rounded px-2 py-1 text-sm flex-1 ml-2" placeholder="Description of Code" /> -->
            <x-input.field
                label="{{ __('Description of Code') }}"
                type="text" name="title"
                required
                autofocus="true"
                class="my-2"
                max-width="w-full"
                id="desc"
                value="{{ $codepen->description }}" />
            <div class="flex items-center mx-2">
                <input type="checkbox" id="is_public" {{ $codepen->status == "public" ? 'checked' : '' }} />
                <label for="is_public" class="text-sm ml-1">is Public?</label>
            </div>

            @if($codepen->user_id == auth()->id())
            <x-button-link.primary class="save-btn" id="save-btn" data-type="save">
                <i class="fa fa-save"></i>
                Save
            </x-button-link.primary>
            @else
            <x-button-link.primary class="save-btn" id="save-btn" data-type="save-as">
                <i class="fa fa-save"></i>
                Save As
            </x-button-link.primary>
            @endif
        </div>
    </div>
    <div id="main-container" class="flex w-full m-0 relative border" style="height: calc(100vh - 98px)">
        <input type="hidden" id="codepen_id" value="{{ $codepen->id }}">
        <!-- Editor Containers -->
        <div id="container-left" class="w-[450px] h-full flex flex-col">
            <div class="px-2 h-8 flex items-center justify-between bg-primary-500">
                <span class="font-semibold text-md text-white">HTML</span>
            </div>
            <div id="html-editor" class="editor border rounded">{{ $codepen->content_html }}</div>
            <div class="px-2 h-8 flex items-center justify-between bg-primary-500 cursor-row-resize handler">
                <span class="font-semibold text-md text-white">CSS</span>
            </div>
            <div id="css-editor" class="editor border rounded">{{ $codepen->content_css }}</div>
            <div class="px-2 h-8 flex items-center justify-between bg-primary-500 cursor-row-resize handler">
                <span class="font-semibold text-md text-white">JS</span>
            </div>
            <div id="js-editor" class="editor border rounded">{{ $codepen->content_js }}</div>
            <div class="px-2 h-8 flex items-center justify-between bg-primary-500 cursor-row-resize handler border-b">
            </div>
            <div id="placehold" class="flex-1"></div>
            <input type="hidden" id="auth_check" value="{{ auth()->check() }}" >
        </div>
        <div class="resizable-handler w-2 h-full cursor-ew-resize"></div>
        <div id="container-right" class="h-full flex-1 relative">
            <iframe id="result" class="w-full h-full border rounded bg-white"></iframe>
            <div class="w-full h-full opacity-0 absolute top-0 overlay"></div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-html.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-css.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-javascript.js"></script>

    <script src="{{ asset('js/codepen/initEditor.js') }}"></script>
    <script src="{{ asset('js/codepen/edit.js') }}"></script>
</x-layouts.app>