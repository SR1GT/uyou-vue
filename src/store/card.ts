import { defineStore } from "pinia";

export const useCardStore = defineStore("card", {
  state() {
    return {
      cardId: "",
    };
  },
  actions: {
    change(newCardId: string) {
      this.cardId = newCardId;
    },
  },
});
