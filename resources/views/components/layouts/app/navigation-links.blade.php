<x-nav.item route="codepen.list">{{ __('Codepen') }}</x-nav.item>
<x-nav.item route="widgets">{{ __('Widget') }}</x-nav.item>

@guest
    <x-nav.item route="login" class="md:hidden">{{ __('Login') }}</x-nav.item>
@endguest
