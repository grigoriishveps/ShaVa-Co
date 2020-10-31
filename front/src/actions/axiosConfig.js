import {default as axiosBase} from 'axios';
export const API_BASE = "https://api.vim.emphasoft.com/";
console.log(API_BASE)

export const axios = axiosBase.create({
  baseURL: "https://localhost:8000/",
  timeout: 20000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json"
  },
});
