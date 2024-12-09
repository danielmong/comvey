@php($description = isset($description) ? $description : config('app.description'))
<meta name="description" content="{{ $description }}">

@php($canonical = isset($canonical) ? $canonical : url()->current())
<link rel="canonical" href="{{ $canonical }}">

<title>
    @isset($title)
    {{ $title }} | {{ config('app.name', 'SaaSykit') }}
    @else
    {{ config('app.name', 'SaaSykit') }}
    @endisset
</title>

<style>
    .ace_print-margin {
        display: none;
    }
</style>

<link rel="shortcut icon" type="image/x-icon" href="{{asset('images/favicon.ico')}}">
<link rel="stylesheet" href="{{asset('css/global.css')}}">
<!-- <script src="https://cdn.tailwindcss.com"></script> -->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="{{ asset('css/notify/index.var.css') }}">
<script src="{{ asset('js/codepen/edit.js') }}"></script>

@include('components.layouts.partials.social-cards')

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

<!-- Scripts -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js" crossorigin="anonymous"></script>
<script src="{{ asset('js/notify/index.var.js') }}" crossorigin="anonymous"></script>

@vite(['resources/sass/app.scss', 'resources/js/app.js'])
@stack('head')