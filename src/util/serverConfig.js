/**
 * Created by 143301 on 2017/6/8.
 */

// const rootUrl = 'http://127.0.0.1:8081';
const rootUrl = 'http://119.29.208.113:8081';
export const AppConfig = {
  url: {
    getExpressDetail: `${rootUrl}/getED`,
  },
  postOption: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {}
  }
};
