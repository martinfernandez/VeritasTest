# VeritasTest
Attached you'll find a mockup of a page (mockup.pdf). You have to implement the markup and css of that page along with the needed javascript code to implement the functionality of the "Jump to" input.

The behavior of the "Jump to" input is as follows:
When the user clicks "Jump to", it should display a list of universities. Every university has a list of "child" links (Snapshot, Academics, etc).
All universities should be collapsed by the default, ie the list of children links should be hidden. 
The only university that should be "expanded" is the current university.
If the user clicks on Harvard > Snapshot, it should take the user to a page /hardvard/snapshot or harvard-snapshot or any other url. The format of the url is not important, the important part is that the page should be similar to the mockup but the small title should say "Snapshot" instead of "Essential Guide".
If the user clicks on "MIT (Sloan)", it should take the user to a page /mit. The format of the url is not important, the important part is that the page should be similar to the mockup but it should say "MIT (Sloan)" instead of "Harvard.... ". The small title at the top should say "Essential Guide".
Also, in this case "MIT (Sloan)" becomes the current university, this means that is should appear expanded and at the top of the list.
The "Jump to" input should also work as an autocompletion input. For instance, if the user types "Harv" or "vard", it should filter and only list the "Harvard" list (and all its child links)
Some Notes:
You can assume the url of each link at will.
The list of child links for each university can be different.
It is important that the page look similar to the mockup as much as possible.
The implementation of the ​"Jump to" ​form should be ​the same ​in each page ​(there should not be a different js or css inlined in the pages)​
Do not hardcode html on each page that has the order differently. Basically we would like one html (and js,css) the could be included in a backend app (PHP or ruby), and that file should dynamically populate the list based on which page I am currently at.
Feel free to use any javascript, html or css library (jquery, underscore, angular, bootstrap, etc).

Please don't take more than 6-7 hours. Time might not be enough, but we want to see how well you handle yourself given the time, how you think, and how you prioritize when time is insufficient to solve the problem.
