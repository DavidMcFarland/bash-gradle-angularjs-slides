# Now onto our second topic for this presentation.
The shiny new javascript framework.

# Another quick history lesson.
* DOM manipulation was initial supported through Javascript's:
** Document.getElementById
** Document.getElementsByName
** Document.getElementsByTag
This worked well until you wish to collect a more complex set of elements. 
Get me all table elements within an element with the id printable-content?
* This initially involved DOM traversal - maybe a recursive search for all table elements?

function findMatchingElements(elements, type) {
    var matchingElements = [];
    if (elements.hasChildNodes()) {
      var child = elements.firstChild;
      while (child) {
        if (child.nodeType === 1 && child.tagName == type) {
          matchingElements += findMatchingElements(child)
        }
        child = child.nextSibling;
      }
    }
    return matchingElements;
}

var printableContentElement =  document.getElementById('printable-content');
var matchingTables = findMatchingElements(printableContentElement, 'TABLE');

* Then came jQuery which introduced selectors. 
$("#printable-content table").hide();