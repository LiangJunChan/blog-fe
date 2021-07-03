import { request } from 'umi';

export async function queryRule(params?: any) {
  return request('/api/autobuild', {
    params,
  });
}
