<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{config('app.name')}} :: @yield('titulo')</title>
</head>
<body>

    <div class="container">
        @yield('conteudo')
    </div>

    <footer>
        <p>
            Teste - 2025
        </p>
    </footer>
</body>
</html>