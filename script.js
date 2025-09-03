document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let txt = document.getElementById("textMaior").value;

    let mensagem = `*Novo contato do site*%0A
     Olá, Meu nome é ${nome}%0A
      Meu email é : ${email}%0A
     quero te contatar por esse motivo: ${txt}`;

    let telefone = "5531971052987";

    window.open(`https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`, "_blank");
});