@extends('usuario')

@section('titulo', 'Cadastro de usúario')

@section('conteudo')
    <p>Formulario</p>
    <form action="/salvar" method="post">
        {{csrf_token()}} 
        <!-- Valor referente ao token, preenche o token para verificar se é valido.-->
        <div class="field">
            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="nome"/>

            @if($errors->has('nome'))
                @foreach($erros->get('nome')
                    <strong class="error">{{$erro}}</strong>
                )
                @endforeach
            @endif
        </div>

        <div class="field">
            <label for="nome">Email:</label>
            <input type="email" name="email" id="email"/>

            @if($errors->has('nome'))
                @foreach($erros->get('nome')
                    <strong class="error">{{$erro}}</strong>
                )
                @endforeach
            @endif
        </div>

        <div class="field">
            <label for="senha">Email:</label>
            <input type="password" name="senha" id="senha"/>
        </div>
    </form>
@endsection
