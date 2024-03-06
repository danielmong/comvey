<div class="px-4">
    <p class="pb-4">
        {{__('To integrate Github with your application, check out ')}}

        <a href="https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app" target="_blank" class="text-blue-500 hover:underline">
            {{__('getting access to the Github API.')}}
        </a>
    </p>

    <p>
        {{__('When prompted to enter a redirect URI, use the following:')}}
        <code class="bg-gray-100 px-4 py-2 block my-4 overflow-x-scroll">
            {{ config('app.url') . config('services.github.redirect') }}
        </code>
    </p>
</div>
