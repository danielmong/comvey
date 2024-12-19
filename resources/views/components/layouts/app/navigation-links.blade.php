<x-nav.item route="dashboard">{{ __('Dashboard') }}</x-nav.item>
<x-nav.item route="#faq">{{ __('FAQ') }}</x-nav.item>

@guest
    <x-nav.item route="login" class="md:hidden">{{ __('Login') }}</x-nav.item>
@endguest
