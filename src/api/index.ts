import user from './login'
export const api = {
    user
}
window.api = api
declare global {
    interface Window {
        api: typeof api
    }
}