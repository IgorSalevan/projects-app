export const getApiBaseUrl = () =>
  process.env.NEXT_PUBLIC_API_MOCK_URL || process.env.NEXT_PUBLIC_API_URL;

export const fetchData = async (
  path: string | URL,
  params?: RequestInit
): Promise<Response> => await fetch(`${getApiBaseUrl()}/${path}`, params);

export const getRequestData = async (path: string): Promise<Response> =>
  await fetchData(path);

const requestWithBody = async (
  method: 'post' | 'put' | 'patch',
  path: string,
  body: BodyInit | Record<string, unknown>
): Promise<Response> =>
  await fetchData(path, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

export const postRequestData = async (
  path: string,
  body: BodyInit | Record<string, unknown>
): Promise<Response> => await requestWithBody('post', path, body);

export const putRequestData = async (
  path: string,
  body: BodyInit | Record<string, unknown>
): Promise<Response> => await requestWithBody('put', path, body);

export const deleteRequestData = async (path: string): Promise<Response> =>
  await fetchData(path, {
    method: 'delete',
  });
