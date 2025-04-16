// Test/app.test.js
const request = require('supertest');
const app = require('../index'); // 引入你的 Express 应用

describe('GET /', () => {
  it('should return Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World');
  });
});
