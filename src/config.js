// const debug = true;
// const devUrl = 'http://localhost:3000'; //開發中
// const prodUrl = 'http://www.abc.com'; //實際網址
// export const imgUrl = debug ? devUrl : prodUrl;

let config ={};
export const imgUrl='http://localhost:3000';

export const API_HOST ='http://localhost:3002';
export const RESTAURANT =API_HOST + '/restlist';

config ={API_HOST,RESTAURANT,imgUrl}
export default config;

