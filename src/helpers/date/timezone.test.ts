describe('Helpers - date - Timezone', () => {
  it('should always be UTC', () => {
    expect(new Date().getTimezoneOffset()).toBe(0);
  });
});

export {};
