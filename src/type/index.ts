declare global {
    interface Window {
      AMap:any,
      api: any
  
    }
}
export type api = {
    id: string,
    data: object
}