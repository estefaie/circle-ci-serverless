import handler from './handler';

describe('The handler function', () => {
  it('returns a message', async () => {
    const response = await handler.hello({});
    const body = JSON.parse(response.body);
    expect(body.message).toBe(
      'Go Serverless v1.0! Your function executed successfully!'
    );
  });
});
