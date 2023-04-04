import api from "./api";

export const getCharactersApi = async (parameters?: any) => (await api.get("/characters", {
  params: parameters
})).data;

export const getCharacterApi = async (id: number) => (await api.get(`/characters/${id}`)).data;