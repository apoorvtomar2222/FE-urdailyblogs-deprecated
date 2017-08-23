import axios from 'axios';

export const FETCH_POSTS='FETCH_POSTS';
export const FETCH_ARTICLE='FETCH_ARTICLE';
const ROOT_URL ='https://dailyblogbackend.herokuapp.com';
const API_KEY='?key=123';


export function fetchPosts(){ 
    const request = axios.get(`${ROOT_URL}/feed/feedtest/:10`);
    console.log("FetchPost() action request",request);
    return{
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchArticle(id){
    console.log("Called me",id);
    const articleid =id;
    const request = axios.get(`${ROOT_URL}/articles/${articleid}`);
    console.log("Request is",request);
    return{
        type: FETCH_ARTICLE,
        payload: request
    }
}