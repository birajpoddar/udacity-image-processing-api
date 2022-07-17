import server from '../server';
import supertest from 'supertest';

// getting the app from server
const app = server.app;
const apiPath = '/api/images';
const filename = process.env.filename ?? 'fjord';

describe('Server Tests', () => {
  const request = supertest(app);

  describe('Status Code Tests', () => {
    describe('Negative Tests', () => {
      it('should return StatusCode 404 for request with no query', async () => {
        const response = await request.get(apiPath);
        expect(response.status).toBe(404);
      });

      it('should return StatusCode 404 for a request with invalid filename query', async () => {
        // prettier-ignore
        const response = await request.get(`${apiPath}?filename=${filename.substring(0, 2)}`);
        expect(response.status).toBe(404);
      });

      it('should return StatusCode 404 for a request with valid filename, width and height set to 0 for query', async () => {
        // prettier-ignore
        const response = await request.get(`${apiPath}?filename=${filename}&width=0&height=0`);
        expect(response.status).toBe(404);
      });

      it('should return StatusCode 404 for a request with valid filename, width and height set to negative for query', async () => {
        // prettier-ignore
        const response = await request.get(`${apiPath}?filename=${filename}&width=-20&height=-43`);
        expect(response.status).toBe(404);
      });

      it('should return StatusCode 404 for a request with valid filename, width and height set to NaN for query', async () => {
        // prettier-ignore
        const response = await request.get(`${apiPath}?filename=${filename}&width=kt&height=ls`);
        expect(response.status).toBe(404);
      });

      it('should return StatusCode 404 for a request with valid filename, width and height set to negative for query', async () => {
        // prettier-ignore
        const response = await request.get(`${apiPath}?filename=${filename}&width=-20&height=-43`);
        expect(response.status).toBe(404);
      });

      it('should return StatusCode 404 for a request with valid filename and width set to negative for query', async () => {
        // prettier-ignore
        const response = await request.get(`${apiPath}?filename=${filename}&width=-20`);
        expect(response.status).toBe(404);
      });

      it('should return StatusCode 404 for a request with valid filename and height set to 0 for query', async () => {
        // prettier-ignore
        const response = await request.get(`${apiPath}?filename=${filename}&height=0`);
        expect(response.status).toBe(404);
      });

      it('should return StatusCode 404 for a request with valid filename and width set to NaN for query', async () => {
        // prettier-ignore
        const response = await request.get(`${apiPath}?filename=${filename}&width=kt`);
        expect(response.status).toBe(404);
      });
    });

    describe('Positive Tests', () => {
      it('should return StatusCode 200 for a request with correct filename query', async () => {
        const response = await request.get(`${apiPath}?filename=${filename}`);
        expect(response.status).toBe(200);
      });

      it('should return StatusCode 200 for a request with correct filename and width query', async () => {
        // prettier-ignore
        const response = await request.get(`${apiPath}?filename=${filename}&width=200`);
        expect(response.status).toBe(200);
      });

      it('should return StatusCode 200 for a request with correct filename and height query', async () => {
        // prettier-ignore
        const response = await request.get(`${apiPath}?filename=${filename}&height=200`);
        expect(response.status).toBe(200);
      });

      it('should return StatusCode 200 for a request with correct filename, width and height query', async () => {
        // prettier-ignore
        const response = await request.get(`${apiPath}?filename=${filename}&width=300&height=200`);
        expect(response.status).toBe(200);
      });
    });
  });
});
