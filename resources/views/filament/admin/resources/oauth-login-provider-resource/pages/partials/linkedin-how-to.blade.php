<div class="px-4">
    <p class="pb-4">
        {{__('To integrate Linkedin with your application, check out ')}}

        <a href="https://learn.microsoft.com/en-us/linkedin/shared/authentication/client-credentials-flow?context=linkedin%2Fconsumer%2Fcontext" target="_blank" class="text-blue-500 hover:underline">
            {{__('getting access to the LinkedIn API.')}}
        </a>
    </p>
    <p>
        {{__('When prompted to enter a redirect URI, use the following:')}}
        <code class="bg-gray-100 px-4 py-2 block my-4 overflow-x-scroll">
            {{ config('app.url') . config('services.linkedin.redirect') }}
        </code>
    </p>
</div>
