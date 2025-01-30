export const getApiBaseUrl = () =>
  process.env.API_MOCK_URL || process.env.API_URL;

export const fetchData = async (
  path: string | URL,
  params?: RequestInit
): Promise<Response> => await fetch(`${getApiBaseUrl()}/${path}`, params);

export const getRequestData = async (path: string): Promise<Response> =>
  await fetchData(path);

export const postRequestData = async (
  path: string,
  body: BodyInit | Record<string, unknown>
): Promise<Response> =>
  await fetchData(path, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
