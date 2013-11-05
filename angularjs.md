# Now onto our second topic for this presentation.
The shiny new javascript framework.

# Another quick history lesson.
* Basic DOM selecting (But how would you find elements at a fine grain e.g. all a with table)
* DOM traversal
* JQuery Selectors and the Sizzle selector engine.
* JQuery not only introduce powerful selectors - it allowed easy event listening with bind statements.
* Browsers adopted basic selectors from jQuery with document.querySelectorAll(css selector);
* In browsers which support querySelectorAll jQuery uses the native implementation if available.
* jQuery does support additional selectors not currently supported by browser.
* Both these approaches are searching for and updating the DOM.

* AngularJS is one of a new generation of web frameworks.
* It takes the familar MVC pattern from the server side and applies it to the browser.
* AngularJS applications are backed by controllers which manage behavour and the model.
* Variables, objects and functions are added to the scope by the controller (and sometime by the view)
* The scope makes up the applications model.
* Scopes are arranged in hierarchical structure which mimic the DOM structure of the application. 
* Scope can be confusing when you start using angularJS - chrome has a plugin for visualising the scopes called Bat-a-rang
* Now to look at some features AngularJS provides - 2 way bindings. 
* Both the input feilds are bound to variables in the model when they are updated the update cycle refreshs the markup expression which adds the two numbers.
* Here we have a simple todo list - it I filter for blue, only entries with the word blue appear.
* The code behind this is rather simple - at the bottom you can see the model being defined.
* At the top we use the ng-repeat directive to interate over the items and display each with a input box and span.
* And above that we have an input feild for specify the a filter term.
* If we look back at the ng-repeat we can see a pipe is being used and then we are filtering for items that contain the search term.
* Taking this example a little further - we are now able to add and delete items from the todo list.
* In addition to the previous template for displaying the list items we now have a form. 
* When the form is submitted we are calling addTodo and when remove on complete button is clicked we are calling removeCompleted()
* IN the controller we have two simple functions to support the users interaction with the view.
* In this example we are writing a new filter, i.e. not one provided by Angular out of the box. 
* Again this is a simple function which take input and provides output.
* The clear speration of concerns which are possible with AngularJS means any code you write is very testable.
* AngularJS was written with Testing in mind and there is even a tool specifically for testing anularjs apps called Karma.
* However testing javascript is quite complex and requires a number of tools and gems to be installed.
* Basically which I can get gradle to do everything for me including minify and gizp JS and CSS. I would need to install other softwar on the systme to test my javascript code.
* Another principle which AngularJS support is single page applications.
* It allows you to define routes where templetes or html screen will be rendered without a page refresh.
* AngularJs also provides a wide range of validation and pattern match directives for forms.
* See this example where an email address is valid - if we type somthing it becomes dirty and if we type a valid email it becomes valid.

* Thank you for listening.
* Review forms are at the back...


