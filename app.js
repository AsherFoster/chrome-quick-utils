/**
 * Created by asher on 23/09/16.
 */
(function(){
  angular.module( 'Utils', [ 'ngMaterial', 'ngMessages' ])
      .config(function($mdThemingProvider){
        $mdThemingProvider.theme('default')
            .dark();
      })
      .filter("urlEncode", function(){
        return encodeURIComponent;
      })
      .controller("rootCtrl", function($scope){
        $scope.encode = function(){
          $scope.encoded = encodeURIComponent($scope.plain);
        };
        $scope.decode = function(){
          try{
            $scope.plain = decodeURIComponent($scope.encoded);
            $scope.encoder.encoded.$error.invalid = false;
          }catch(e){
            $scope.encoder.encoded.$error.invalid = true;
          }
        };
        $scope.cleanCache = function(){
          $scope.cleaned = false;
          $scope.cleaning = true;
          chrome.browsingData.remove({}, {
            "cache": true
          }, function(){
            $scope.$apply(function(){
              $scope.cleaned = true;
              $scope.cleaning = false;
            });
          });
        }
      });
})();