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
* To start with a few examples of AngularJS
- Two-way binding:
  Both input boxes bind to a variable in the model which backs this view.
  The markup {{}} allows us to bind simple expressions

- Filter:


- ng-repeat



* One of the more powerful and seeming magical feature in AngularJS is two way bindings.
* This presentation is an AngularJS application... 
* Heres an example of a two way binding all we have define in the html code is:
* Angular has added both variable num1 and 2 to the model backing the html view.
* When we update one of the number angular updates the model and any place in the view which reference this value in the model.
* I have mentioned model and view so far and this is because angular embraces MVC a programing paradigm most server side developers are familar with.

* It seperates the model and contoller into javascript and the view into a template (which resembles html with some extensions)
** So when the browser 

