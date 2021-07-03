import { request } from 'umi';

export async function queryRule(params?: any) {
  return request('/api/leetcode', {
    params,
  });
}

export async function queryList(params?: any) {
  return request('/api/leetcode/list', {
    params,
  });
}
