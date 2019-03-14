// 'use strict';

// angular.module('myApp.dashboard', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/dashboard', {
//     templateUrl: 'dashboard/dashboard.html',
//     controller: 'DashboardController'
//   });
// }])

// .controller('DashboardController', function($scope) {
//   var employees = [
//     {name:"Rekha",dob:new Date("November 19, 1992"),gender:"F",salary:"10000"},
//     {name:"Rajat",dob:new Date("April 9, 1990"),gender:"F",salary:"1000"},
//     {name:"Shina",dob:new Date("March 29, 1994"),gender:"F",salary:"110000"},
//     {name:"Neha",dob:new Date("June 9, 1981"),gender:"F",salary:"10020"},
//     {name:"Megha",dob:new Date("May 1, 1991"),gender:"F",salary:"10030"}
//   ];
//   $scope.employees = employees;
// });
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: [ './dashboard.css' ]
})
export class Dashboard {
}