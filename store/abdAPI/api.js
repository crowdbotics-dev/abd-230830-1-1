import axios from "axios"
const abdAPI = axios.create({
  baseURL: "https://abd-230830-1-1.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return abdAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_home_list(payload) {
  return abdAPI.get(`/api/v1/home/`)
}
function api_v1_home_create(payload) {
  return abdAPI.post(`/api/v1/home/`, payload)
}
function api_v1_home_retrieve(payload) {
  return abdAPI.get(`/api/v1/home/${payload.id}/`)
}
function api_v1_home_update(payload) {
  return abdAPI.put(`/api/v1/home/${payload.id}/`, payload)
}
function api_v1_home_partial_update(payload) {
  return abdAPI.patch(`/api/v1/home/${payload.id}/`, payload)
}
function api_v1_home_destroy(payload) {
  return abdAPI.delete(`/api/v1/home/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return abdAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return abdAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return abdAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return abdAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return abdAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return abdAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return abdAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return abdAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return abdAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return abdAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return abdAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return abdAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return abdAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_home_list,
  api_v1_home_create,
  api_v1_home_retrieve,
  api_v1_home_update,
  api_v1_home_partial_update,
  api_v1_home_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
