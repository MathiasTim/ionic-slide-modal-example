'use strict';
angular.module('slidemodal')
.service('Start', function ($http) {
  console.log('Hello from your Start service');

  // some initial data
  this.someData = {
    binding: 'Yes! Got that databinding working',
    choice: {}
  };

  this.getData = function (loadType) {
    var that = this;
    return $http.get('https://slide-modal.firebaseio.com/' + loadType + '.json')
    .then(function (result) {
      that.someData[loadType] = result.data;
      return result.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  };
});
