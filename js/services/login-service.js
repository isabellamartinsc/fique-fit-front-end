(root => {
  // Configurando o "Banco de dados"
  const DataBaseName = "Users";
  const dbUsers = DataBase.getInstance(DataBaseName, {
    users: [
      {
        cpf: "12345678909",
        password: "123",
        name: "Isabella MC",
        email: "isabella.c@fiquefit.com"
      },
      {
        cpf: "12345678908",
        password: "123",
        name: "Jonathan RS",
        email: "jonathan.r@fiquefit.com"
      }
    ]
  });
  DataBase.saveInstance(DataBaseName);

  root.LoginService = {
    hasUser(cpf) {
      return dbUsers.users.filter(user => user.cpf === cpf).length > 0;
    },
    checkPassword(cpf, password) {
      const user = dbUsers.users.filter(user => user.cpf === cpf)[0];

      if (user) {
        return password === user.password;
      }

      throw {
        message: "User not found",
        type: "Login Error"
      };
    },
    validCpf(cpf = "") {
      return cpf.replace(/\D/g, "").length === 11;
    },
    getUser(cpf) {
      return dbUsers.users.filter(user => user.cpf === cpf)[0];
    },
    addUser({ cpf, name, email, password }) {
      dbUsers.users.push({ cpf, name, email, password });
      DataBase.saveInstance(DataBaseName);
    }
  };
})(window);
