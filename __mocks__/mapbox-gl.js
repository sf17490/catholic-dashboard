module.exports = {
    Map: function () {
      return {
        on: jest.fn(),
        remove: jest.fn(),
      };
    },
    NavigationControl: jest.fn(),
  };