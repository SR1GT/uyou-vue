import Crypto from "crypto-js";

function md5(str: string | null) {
  if (str === null) return null;
  return Crypto.MD5(str).toString();
}

import request from "./request";

export function getData() {
  return request({
    url: "/",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

export function accountCheck(cardId: string, password: string) {
  return request({
    url: "/Accountcheck",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify({
      CardID: cardId,
      password: md5(password),
    }),
  });
}

export function changePassword(
  cardId: string,
  oldPassword: string,
  newPassword: string
) {
  return request({
    url: "/Changepw",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify({
      CardID: cardId,
      oldPassword: md5(oldPassword),
      newPassword: md5(newPassword),
    }),
  });
}

export function createAccount(
  name: string,
  sex: number,
  id: string,
  phone: string,
  address: string,
  password: string | null
) {
  return request({
    url: "/CreateAccount",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify({
      password: md5(password),
      Name: name,
      Sex: sex,
      Id: id,
      Phone: phone,
      Address: address,
    }),
  });
}

export function deleteAccount(cardId: string, id: string) {
  return request({
    url: "/DeleteAccount",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify({
      CardID: cardId,
      Id: id,
    }),
  });
}

export function deleteUser(id: string) {
  return request({
    url: "/DeleteUser",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify({
      Id: id,
    }),
  });
}

export function operatorCheck(jobId: string, password: string) {
  return request({
    url: "/Operatorcheck",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify({
      OperatorID: jobId,
      Password: md5(password),
    }),
  });
}

export function confirmTransaction(
  cardId: string,
  amount: number,
  transactionType: number,
  type: number,
  operatorID: string
) {
  return request({
    url: "/confirm",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify({
      CardID: cardId,
      Amount: amount,
      TransactionType: transactionType,
      Type: type,
      OperatorID: operatorID,
    }),
  });
}

export function save(cardId: string, type: number) {
  return request({
    url: "/save",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify({
      CardID: cardId,
      type: type,
    }),
  });
}

export function withdrawal(cardId: string) {
  return request({
    url: "/with",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify({
      CardID: cardId,
    }),
  });
}

export function history(cardId: string) {
  return request({
    url: "/history",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify({
      CardID: cardId,
    }),
  });
}
