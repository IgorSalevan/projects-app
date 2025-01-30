export async function register() {
  if (process.env.NEXT_RUNTIME == 'nodejs' && process.env.API_MOCK_URL) {
    const {server} = await import('../mock/node');
    server.listen();
  }
}