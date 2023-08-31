import axios from "axios"
const randomBank = axios.create({
  baseURL: "https://random-data-api.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function randombank_get_api_bank_random_bank_read(payload) {
  return randomBank.get(`/api/bank/random_bank`)
}
export const apiService = { randombank_get_api_bank_random_bank_read }
