import app from '../server';
import supertest from 'supertest';

describe('Server Tests', () => {
  const request = supertest(app);

  it('expects Server is returning StatusCode 200', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toBe(200);
  });
});
