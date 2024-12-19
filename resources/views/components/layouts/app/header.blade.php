<nav class="relative bg-primary-500 text-white border-gray-200 dark:bg-gray-900">
    <livewire:announcement.view />
    <div class="navbar max-w-screen-xl items-center mx-auto">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden me-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0" class="menu menu-lg dropdown-content mt-3 z-[1] p-2 border border-primary-50 shadow-2xl shadow-primary-500/50 bg-primary-500 rounded-box w-52">
                    <x-layouts.app.navigation-links></x-layouts.app.navigation-links>
                </ul>
            </div>
            <a href="/" class="flex justify-center items-center">
                <!-- <img src="{{asset(config('app.logo.light') )}}" class="h-6" alt="Logo" /> -->
                <span class="font-black text-3xl text-white">Editnow</span>
            </a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <x-nav>
                <x-layouts.app.navigation-links></x-layouts.app.navigation-links>
            </x-nav>
        </div>
        <div class="navbar-end">
            @if(request()->is('codepen/list') || request()->is('codepen/list/*'))
            <x-link class="hidden md:block text-primary-50" href="{{route('codepen.create')}}">
                <span>
                    <i class="fa fa-plus"></i>
                </span>
                {{ __('Create New') }}
            </x-link>
            @endif

            @if(request()->is('codepen/create') || request()->is('codepen/edit') || request()->is('codepen/edit/*'))
            <x-link class="hidden md:block text-primary-50" href="{{route('codepen.list')}}">
                <span>
                    <i class="fa fa-arrow-left"></i>
                </span>
                {{ __('Go to List') }}
            </x-link>
            @endif

            @auth
            <x-layouts.app.user-menu></x-layouts.app.user-menu>
            @else
            <x-link class="hidden md:block text-primary-50" href="{{route('login')}}">{{ __('Login') }}</x-link>
            <x-button-link.secondary elementType="a" href="">{{ __('Get started') }}</x-button-link.secondary>
            @endauth
        </div>
    </div>
</nav>