document.getElementById("cadastroForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dados = {
    nome: document.querySelector("[name='Nome Completo']").value,
    rg: document.querySelector("[name='RG']").value,
    cpf: document.querySelector("[name='CPF']").value,
    nascimento: document.querySelector("[name='Nascimento']").value,
    cep: document.querySelector("[name='CEP']").value,
    rua: document.querySelector("[name='Rua']").value,
    numero: document.querySelector("[name='Número']").value,
    profissao: document.querySelector("[name='Profissão']").value,
    telefone: document.querySelector("[name='Telefone']").value,
    pet: document.querySelector("[name='Nome do Pet']").value,
    especie: document.querySelector("[name='Espécie']").value,
    raca: document.querySelector("[name='Raça']").value,
    cor: document.querySelector("[name='Cor da Pelagem']").value,
    petNascimento: document.querySelector("[name='Nascimento do Pet']").value,
    sexo: document.querySelector("[name='Sexo']").value,
    castrado: document.querySelector("[name='Castrado']").value,
  };

  emailjs
    .send("service_xxxxxx", "template_xxxxx", dados)
    .then(function () {
      const mensagem = `*Novo Cadastro*

*TUTOR*
Nome: ${dados.nome}
RG: ${dados.rg}
CPF: ${dados.cpf}
Nascimento: ${dados.nascimento}

CEP: ${dados.cep}
Rua: ${dados.rua}
Número: ${dados.numero}
Profissão: ${dados.profissao}
Telefone: ${dados.telefone}

*PET*
Nome: ${dados.pet}
Espécie: ${dados.especie}
Raça: ${dados.raca}
Cor: ${dados.cor}
Nascimento: ${dados.petNascimento}
Sexo: ${dados.sexo}
Castrado: ${dados.castrado}`;

      window.open(`https://wa.me/55?text=${encodeURIComponent(mensagem)}`, "_blank");
      window.location.href = "obrigado.html";
    })
    .catch(function (erro) {
      console.error(erro);
      alert("Erro ao enviar o cadastro.");
    });
});