angular.module('DemoApp', ['DemoComponents']).controller('PortfoliosCtrl', ($scope, $http) ->
  $http.get('/api/v1/portfolios').then((response) ->
    $scope.portfolios = response.data
  , (error) ->
    console.error('ERR', error)
  )
)
