<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth h-full">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @include('components.layouts.partials.head')
</head>

<body class="text-primary-900 flex flex-col min-h-screen" x-data>
    <div id="app" class="flex flex-col flex-grow">
        <x-layouts.app.header class="flex-shrink-0" />

        <div class="flex-grow">
            <div class="mx-auto">
                {{ $slot }}
            </div>
        </div>

        <x-layouts.app.footer class="flex-shrink-0" />

        @include('components.layouts.partials.tail')
    </div>
    <x-impersonate::banner />
    <link rel="stylesheet" href="http://localhost:8000/css/widgets.css">
    <script type="text/javascript" src="http://localhost:8000/js/widgets.js"></script>
    <script type="text/javascript" src="http://localhost:8000/js/embed.js"></script>
    <script>
        new CustomLet({
            widgetType: 'whatsapp',
            options: {
                phone: 'adsf',
                message: 'Hello! How can we help you?',
            },
        });

        new CustomLet({
            widgetType: 'messenger',
            options: {
                phone: 'adsf',
                message: 'Hello! How can we help you?',
            },
        });

        new CustomLet({
            widgetType: 'links',
            options: {
                links: [{
                    "text": "asdf",
                    "url": "adsf"
                }]
            },
        });
    </script>

</html>