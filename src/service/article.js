import request from '../util/request';

export function queryList(page,size,searchData) {
  return request(`/con/article/search/${page}/${size}`, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(searchData)
  });
}

export function add(data) {
  return request(`/con/article`, {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data)
  });
}