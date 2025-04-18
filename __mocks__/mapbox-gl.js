console.log('✅ Using mocked mapbox-gl')
module.exports = {
    Map: function () {
      return {
        on: jest.fn(),
        remove: jest.fn(),
      };
    },
    NavigationControl: jest.fn(),
  };