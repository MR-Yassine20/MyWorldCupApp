/*
console.log('script is loaded');


getFixtures();


async function getFixtures(){
    const response = await fetch('/fixtures');
    const data = await response.json();

    console.log(data.response);
}

*/

var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope,$http){
    var res = $http.get("/fixtures").then(function(response){

        // handles succes 
        $scope.myData=response.data;
        console.log("data:");

        console.log( $scope.myData);
    },function(resonse){
        // hamdels error
        $scope.content="Something went wrong";
    });
});

