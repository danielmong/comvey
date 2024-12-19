<div class="border border-neutral-200 rounded-lg p-4 my-4 flex gap-3 items-center">

    <div class="flex flex-col gap-1 flex-1">
        <h3 class="!text-lg !font-semibold text-left">
            <a class="text-primary-900 hover:text-primary-500 break-all line-clamp-1" href="#">
                <span class="text-sm">{{ $item->title }}</span>
            </a>
        </h3>
        <p class="text-sm py-1 text-neutral-500 line-clamp-2 break-all text-left">
            <span class="text-sm">{{ $item->description }}</span>
        </p>
        <div class="flex items-center">
            <!-- <div class="rounded-full h-10 w-10 border"></div> -->
            <span class="text-xs">by {{ $item->user->name }}</span>
        </div>
    </div>
    <div>
        <div class="flex gap-2 md:flex-row flex-col">
            @if($item->user_id == auth()->id())
            <span data-id="{{ $item->id }}" class="edit max-w-fit text-secondary-700 text-xxs uppercase border border-secondary-700 cursor-pointer rounded-lg px-2 py-1">
                Edit
            </span>
            <span data-id="{{ $item->id }}" class="delete-btn max-w-fit text-primary-500 text-xxs uppercase border border-primary-300 cursor-pointer rounded-lg px-2 py-1">
                Delete
            </span>
            <span data-id="{{ $item->id }}" class="preview-btn max-w-fit text-primary-500 text-xxs uppercase border border-primary-300 cursor-pointer rounded-lg px-2 py-1">
                Preview
            </span>
            @else
            <span data-id="{{ $item->id }}" href="" class="copy max-w-fit text-secondary-700 text-xxs uppercase border border-secondary-700 cursor-pointer rounded-lg px-2 py-1">
                Make a Copy
            </span>
            <span data-id="{{ $item->id }}" class=" preview-btn max-w-fit text-primary-500 text-xxs uppercase border border-primary-300 cursor-pointer rounded-lg px-2 py-1">
                Preview
            </span>
            @endif
        </div>
    </div>
</div>