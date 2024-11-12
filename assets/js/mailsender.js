function sendmsg() {
    // Captura os valores do formulário
    const nome = document.getElementById('namefield').value;
    const email = document.getElementById('emailfield').value;
    const message = document.getElementById('messagefield').value;

    // Verifica se os campos estão preenchidos
    if (nome && email && message) {
      // Cria o link mailto com o conteúdo
      const mailtoLink = `mailto:muvi10.com@gmail.com?subject=Contato de ${encodeURIComponent(nome)}&body=Nome: ${encodeURIComponent(nome)}%0AEmail: ${encodeURIComponent(email)}%0AMensagem: ${encodeURIComponent(message)}`;
      alert("Enviando ...")
      // Abre o cliente de email
      window.open(mailtoLink, '_blank');

      // Limpa os campos do formulário
      document.getElementById('namefield').value = "";
      document.getElementById('emailfield').value = "";
      document.getElementById('messagefield').value = "";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }


const submitBtn = document.getElementById('form-submit');

submitBtn.addEventListener('click' , ()=>{

        sendmsg();

        nome.value = ""
        email.value = ""
        message.value = ""
});

    