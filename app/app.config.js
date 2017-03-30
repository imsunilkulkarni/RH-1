RH.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider) {
    $routeProvider
    .when("/",{
        template : "<main-container></main-container>",
    })
    .when("/phones/:phoneId",{
        template: '<phone-detail></phone-detail>'
    })
}])