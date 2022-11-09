<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        @viteReactRefresh
        @vite('resources/js/app.jsx')
    </head>
    <body>
        <div id="application">
            </div>
            
            <sript src="{{asset('js/app.jsx')}}"></script>  
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
    
            <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin></script>
    
            <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin></script>
        </body>
</html>