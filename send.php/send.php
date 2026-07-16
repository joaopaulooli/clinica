<?php

$destino = "contato@vetlar.com.br";

$assunto = "Novo Cadastro";

$mensagem = "

Nome: ".$_POST['nome']."

RG: ".$_POST['rg']."

CPF: ".$_POST['cpf']."

Nascimento: ".$_POST['nascimento']."

CEP: ".$_POST['cep']."

Rua: ".$_POST['rua']."

Número: ".$_POST['numero']."

Profissão: ".$_POST['profissao']."

Telefone: ".$_POST['telefone']."

--------------------------

PET

Nome: ".$_POST['pet']."

Espécie: ".$_POST['especie']."

Raça: ".$_POST['raca']."

Cor: ".$_POST['cor']."

Nascimento: ".$_POST['petnascimento']."

Sexo: ".$_POST['sexo']."

Castrado: ".$_POST['castrado'];

mail($destino,$assunto,$mensagem);

header("Location: obrigado.html");

?>