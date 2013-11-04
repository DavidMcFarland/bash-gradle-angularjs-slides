angular.module('DemoModule', []).
  filter('reverse', function() {
    return function(input) {
      var out = "";
      for (var i = 0; i < input.length; i++) {
        out = input.charAt(i) + out;
      }
      return out;
    }
  });

function DemoController($scope) {
  $scope.name = "Jeih";


  $scope.todos = [
    {text:'get on plane', done:true},
    {text:'visit tibet', done:false},
    {text:'find the blue sheep', done:false},
    {text:'take picture of blue sheep', done:false}];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}