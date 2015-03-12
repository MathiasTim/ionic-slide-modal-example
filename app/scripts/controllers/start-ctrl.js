'use strict';
angular.module('slidemodal')
.controller('StartCtrl', function ($scope, $ionicModal, $ionicSlideBoxDelegate, Start) {

  // bind data from service
  $scope.someData = Start.someData;

  $scope.slide = $ionicSlideBoxDelegate;

  $scope.slide.isFirst = function () {
    return $scope.slide.currentIndex() - 1 < 0;
  };

  $scope.slide.isLast = function () {
    return $scope.slide.currentIndex() + 1 === $scope.slide.slidesCount();
  };

  $scope.isEqual = function (paramA, paramB) {
    return angular.equals(paramA, paramB);
  };

  $scope.change = function (loadType) {
    if (loadType === 'type') {
      $scope.someData.choice.kind = null;
      $scope.someData.choice.detail = null;
    } else if (loadType === 'kind') {
      $scope.someData.choice.detail = null;
    }
    if (loadType) {
      Start.getData(loadType)
      .then(function () {
        $scope.slide.next();
      });
    }
  };

  $scope.allFilled = function () {
    return $scope.someData.choice.type &&
      $scope.someData.choice.kind &&
      $scope.someData.choice.detail ? true : false;
  };

  $ionicModal.fromTemplateUrl('partials/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function () {
    Start.getData('type');
    $scope.modal.show();
  };
  $scope.closeModal = function () {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function () {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function () {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function () {
    // Execute action
  });
});
