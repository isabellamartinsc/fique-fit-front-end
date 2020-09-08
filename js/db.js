(root => {
  const instances = {};
  const persistDB = (instanceName, instance = {}) =>
    localStorage.setItem(`DataBase.${instanceName}`, JSON.stringify(instance));
  const getDB = instanceName =>
    JSON.parse(localStorage.getItem(`DataBase.${instanceName}`));

  const DataBase = {
    getInstance(instanceName, defaultValue = {}) {
      if (!instances[instanceName]) {
        const instanceFromLocalStorage = getDB(instanceName);

        if (instanceFromLocalStorage) {
          instances[instanceName] = instanceFromLocalStorage;
          return instanceFromLocalStorage;
        }

        instances[instanceName] = defaultValue;
        return defaultValue;
      }

      return instances[instanceName];
    },
    saveInstance(instanceName) {
      if (typeof instances[instanceName] === "object") {
        persistDB(instanceName, instances[instanceName]);
      } else {
        const error = {
          message: "Instance typeof is not object",
          type: "DataBase Error"
        };
        throw error;
      }
    },
    get(instanceName) {
      const instance = instances[instanceName];

      if (instance) {
        return instance;
      }

      const error = {
        message: "Instance not exist",
        type: "DataBase Error"
      };
      throw error;
    }
  };

  root.DataBase = { ...DataBase };
})(window);
