const debug = true;
const devUrl = 'http://localhost:3000'; //開發中
const prodUrl = 'http://www.abc.com'; //實際網址

export const imgUrl = debug ? devUrl : prodUrl;