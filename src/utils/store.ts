type StoreMethod = (key: string) => {
  get: () => string;
  set: (value: string) => void;
  delete: () => void;
};

const store: StoreMethod = (key: string) => {
  return {
    get: () => {
      return localStorage.getItem(key) || "";
    },
    set: (value: string) => {
      localStorage.setItem(key, value);
    },
    delete: () => {
      localStorage.removeItem(key);
    },
  };
};

export default store;
