<div class="px-4">
    <p class="pb-4">
        {{__('To integrate Paddle with your application, you need to do the following steps:')}}
    </p>
    <ol class="list-decimal ">
        <li class="pb-4">
            <strong>
                {{ __('Login to ') }} <a href="https://login.paddle.com/login" target="_blank" class="text-blue-500 hover:underline">{{ __('Paddle Billing Dashboard') }}</a>
            </strong>
        </li>
        <li class="pb-4">
            <strong>
                {{ __('Vendor ID') }}
            </strong>
            <p>
                {{ __('Under "Developer Tools" > "Authentication" you will find your Vendor Id (also referred to as seller ID). Enter it into the field in the form.') }}
            </p>
        </li>
        <li class="pb-4">
            <strong>
                {{ __('Client Side Token') }}
            </strong>
            <p>
                {{ __('Under "Developer Tools" > "Authentication" > "Client-side tokens", click on "Generate client-side token". Once created, enter it into the field in the form.') }}
            </p>
        </li>
        <li class="pb-4">
            <strong>
                {{ __('Vendor Auth Code') }}
            </strong>
            <p>
                {{ __('On the same page, click on "Generate API Key", and enter a name and a description for the key. Copy the generated key and enter it into the field in the form.') }}
            </p>
        </li>
        <li class="pb-4">
            <strong>
                {{ __('Webhook Secret') }}
            </strong>
            <p>
                {{ __('Head to "Developer Tools" > "Notifications" and click on "New Destination". Enter a description for the webhook, and select "Webhook" as "Notification Type", and enter the URL below.') }}
                <code class="bg-gray-100 px-4 py-2 block my-4 overflow-x-scroll">
                    {{ route('payments-providers.paddle.webhook') }}
                </code>
                {{ __('From the list of events, select all the events under "Transaction" and "Subscription". So all "transaction.xyz" and "subscription.xyz" should be selected.') }}
                {{ __('Click on "Save Destination" and copy the generated webhook secret key and enter it into the field in the form.') }}
            </p>
        </li>
        <li class="pb-4">
            <strong>
                {{ __('Public Key') }}
            </strong>
            <p>
                {{ __('Under "Developer Tools" > "Public Key" you will find your Public Key. Copy it and enter it into the field in the form.') }}
            </p>
        </li>
        <li class="pb-4">
            <strong>
                {{ __('Sandbox mode') }}
            </strong>
            <p>
                {{ __('In case you are installing this on a test environment, you can enable sandbox mode. This will use the Paddle sandbox environment instead of the live environment.') }}
            </p>

            <p>
                <strong>{{ __('Important:') }}</strong>
                {{ __('NEVER enable sandbox mode on a production environment!') }}
            </p>
        </li>
    </ol>
</div>
