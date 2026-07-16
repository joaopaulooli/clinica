document.getElementById("cadastroForm").addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.querySelector("[name='nome']").value;
    const rg = document.querySelector("[name='rg']").value;
    const cpf = document.querySelector("[name='cpf']").value;
    const nascimento = document.querySelector("[name='nascimento']").value;
    const cep = document.querySelector("[name='cep']").value;
    const rua = document.querySelector("[name='rua']").value;
    const numero = document.querySelector("[name='numero']").value;
    const profissao = document.querySelector("[name='profissao']").value;
    const telefone = document.querySelector("[name='telefone']").value;

    const pet = document.querySelector("[name='pet']").value;
    const especie = document.querySelector("[name='especie']").value;
    const raca = document.querySelector("[name='raca']").value;
    const cor = document.querySelector("[name='cor']").value;
    const petnascimento = document.querySelector("[name='petnascimento']").value;
    const sexo = document.querySelector("[name='sexo']").value;
    const castrado = document.querySelector("[name='castrado']").value;

    const mensagem =
`🐾 *Novo Cadastro Vetlar*

👤 *Tutor*

Nome: ${nome}
RG: ${rg}
CPF: ${cpf}
Nascimento: ${nascimento}

CEP: ${cep}
Rua: ${rua}
Número: ${numero}

Profissão: ${profissao}
Telefone: ${telefone}

🐶 *Pet*

Nome: ${pet}
Espécie: ${especie}
Raça: ${raca}
Cor: ${cor}
Nascimento: ${petnascimento}
Sexo: ${sexo}
Castrado: ${castrado}`;

    const numeroWhats = "5543999999999"; // coloque o número da clínica

    window.open(
        `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`,
        "_blank"
    );

});