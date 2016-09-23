/**
 * Created by asher on 23/09/16.
 */
(function(){
  angular.module( 'Utils', [ 'ngMaterial' ])
      .config(function($mdThemingProvider){
        $mdThemingProvider.theme('default')
            .dark();
      })
      .controller("rootCtrl", function(){

      });
})();