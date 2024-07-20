import axios from 'axios';

//서버의 기본주소
const BASE_URL = "http://api.data.go.kr/openapi/tn_pubr_public_weighted_envlp_api";

let queryParams = '?' + encodeURIComponent('serviceKey') + '='+'FJKlMr8vIXHMp%2FQxkj548ivu3ao406ZHfCdEGiOzK1BOme%2FH8MwQBqhh8BR1dhlsqIwgn6G5wpQ2pzadx3zUow%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('0');
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100');
queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json');

export default {
    //처음으로 만들 api는 getArticle 메소드임
    //서버에서 원하는 게시물의 데이터만 가져옴
    getArticle: function(id){
        return axios.get(`${BASE_URL}posts/${id}`);
    },
    // 게시글 전체를 가져오는 메소드
    getAricles: function(page){
        console.log(page)
        return axios.get(BASE_URL + queryParams);
    },
}