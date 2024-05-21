type APIMethod = () => {
  get: (path: string, params: Record<string, string>) => Promise<any>;
  post: (path: string, params: Record<string, string>) => Promise<any>;
};

const api: APIMethod = () => {
  const BASE_URL = "https://next.danvery.com/api";

  const options: RequestInit = {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "manual",
    referrerPolicy: "no-referrer",
  };

  return {
    get: async (path: string, params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${BASE_URL}${path}?${queryString}`, {
        method: "GET",
        ...options,
      });

      return response.json();
    },
    post: async (path: string, data = {}) => {
      const response = await fetch(BASE_URL + path, {
        method: "POST",
        body: JSON.stringify(data),
        ...options,
      });

      return response.json();
    },
  };
};

export default api;
