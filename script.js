var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope) {
        // Create a model
        var employees = [
            { name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788 },
            { name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 68000 },
            { name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000 },
            { name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000 },
            { name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000 }
        ];
        // Attach the model to the scope
        $scope.employees = employees;
        // Attach the model from the view to the scope
        $scope.sortColumn = "+name";
        // Attach a boolean value to the scope
        $scope.reverseSort = false;
        // Attach a function for sorting to the scope
        $scope.sortData = function(column) {
            // Toggle order direction based on column
            // If this is the same column as sorted on previously, change the order in reverse,
            // otherwise don't reverse the sort order
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            // Sort the column passed into this function
            $scope.sortColumn = column;
        }
        // Attach a function to handle css class for sort arrow (up or down)
        $scope.getSortClass = function(column) {
            if($scope.sortColumn == column) {
                // Toggle the arrow (up or down)
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
            }
            // Remove the arrow class on all other columns
            return '';
        }
    });
