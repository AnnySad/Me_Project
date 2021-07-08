import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:7542/2.0/",
  baseURL: "https://neko-back.herokuapp.com/2.0",
  withCredentials: true,
});
const message = `<div style="background-color: lime; padding: 15px">	
	password recovery link: 
	<a href='http://localhost:3000/#/set-new-password/$token$'>
	link</a></div>`;

const from = "ignat@gmail.com";

// api
export const API = {
  createLogin(payload: any) {
    return instance.post<any>("auth/login", payload);
  },

  logout() {
    return instance.delete<any>("auth/me");
  },

  checkIn(email: string, password: string) {
    return instance.post("auth/register", { email, password });
  },
  forgot(email: string) {
    return instance.post("auth/forgot", { email, from, message });
  },
  setNewPassword(password: string, resetPasswordToken: string) {
    return instance.post("auth/set-new-password", { password, resetPasswordToken });
  },
};

export const authAPI = {
  authMe() {
    return instance.post("auth/me");
  },
};

export const packsAPI = {
  getPacks(page: number, pageCount: number, packName?: string) {
    return instance.get<ResponceType<Array<CardPacksType>>>("cards/pack", {
      params: {
        page: page,
        pageCount: pageCount,
        // sortPacks: sortPacks,
        packName: packName
        // user_id: "60d6d56dd5086f000458d12f",
      },
    });
  },

  // getPacks(page: number, pageCount: number) {
  //   console.log("page", page);
  //   console.log("pageCount", pageCount);
  //   return instance.get<ResponceType<Array<CardPacksType>>>(`cards/pack?page=${page}&pageCount=${pageCount}`);
  // },

  addNewPack(title: string) {
    return instance.post("cards/pack", { cardsPack: { name: title } });
  },

  deletePack(id: string) {
    return instance.delete(`cards/pack/?id=${id}`);
  },

  updatedCardsPack(id: string, title?: string) {
    return instance.put("cards/pack", { cardsPack: { _id: id, name: title } });
  },
};

export const cardsAPI = {
  getCards(cardsPack_id: string) {
    return instance.get("cards/card", {
      params: {
        cardsPack_id: cardsPack_id,
        page: 1,
        pageCount: 7,
      },
    });
  },
  addNewCard(cardsPack_id: string, question: string, answer: string) {
    return instance.post("cards/card", {
      card: { cardsPack_id, question, answer },
    });
  },
};

export type ResponceType<T = {}> = {
  cardPacks: T;
  cardPacksTotalCount: number;
  maxCardsCount: number;
  minCardsCount: number;
  page: number;
  pageCount: number;
};

export type CardPacksType = {
  _id: string;
  user_id: string;
  name?: string;
  path?: string;
  cardsCount?: number;
  grade?: number;
  shots?: number;
  rating?: number;
  type?: string;
  created?: string;
  updated?: string;
  __v?: number;
};

export type CardsType = {
  answer?: string;
  question?: string;
  cardsPack_id: string;
  grade?: number;
  rating?: number;
  shots?: number;
  type?: string;
  user_id?: string;
  created?: string;
  updated?: string;
  __v?: number;
  _id?: string;
};

export type OwnCardsType<T = {}> = {
  cards: T;
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
};
