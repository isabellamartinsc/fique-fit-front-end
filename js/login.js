(root => {
  // Configurando o "Banco de dados"
  const DataBaseName = "User";
  const dbUser = DataBase.getInstance(DataBaseName, {
    cpf: "",
    name: "",
    email: ""
  });

  // Elementos da tela de Login
  const inputCpf = document.querySelector("#user-cpf");
  const inputPassword = document.querySelector("#user-password");
  const buttonLogin = document.querySelector("#button-login");

  // Setar valores
  inputCpf.value = dbUser.cpf;

  // Funções
  const verificarLogin = cpf => {
    return LoginService.hasUser(cpf);
  };

  // Manipular a tela
  const showFields = (...fieldsName) => {
    fieldsName.forEach(
      fieldName => (document.querySelector(fieldName).style = "display: show;")
    );
  };

  const hideFields = (...fieldsName) => {
    fieldsName.forEach(
      fieldName => (document.querySelector(fieldName).style = "display: none;")
    );
  };

  const showOrHideForm = cpf => {
    hideFields("#formulario", "#senha");

    if (!cpf) return;

    if (verificarLogin(cpf)) {
      showFields("#senha");
    } else {
      showFields("#formulario", "#senha");
    }
  };

  // Adicionando ações nos elementos
  buttonLogin.addEventListener("click", () => {
    const cpf = inputCpf.value;

    if (inputPassword.value) {
      const doLogin = LoginService.checkPassword(cpf, inputPassword.value);
      if (doLogin) {
        window.location.href = "../pages/home.html";
        return;
      }
      alert("Senha incorreta");
      showFields("#reset-password");
    }

    showOrHideForm(cpf);
    dbUser.cpf = cpf;
    DataBase.saveInstance(DataBaseName);
  });

  // Inicialização da tela
  showOrHideForm(dbUser.cpf);
})(window);
