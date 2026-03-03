// Simulador do servidor para o projeto rodar localmente sem quebrar
export const base44 = {
  entities: {
    Application: {
      create: async (payload) => {
        console.log("Candidatura enviada localmente:", payload);
        return { id: 1, ...payload };
      }
    },
    Announcement: {
      list: async () => {
        // Retorna uma lista vazia de comunicados
        return []; 
      }
    }
  },
  auth: {
    me: async () => {
      return { id: 1, name: "Usuário Local", role: "user" };
    }
  }
};