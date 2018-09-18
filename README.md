<!-- Put the name of the project after the # -->
<!-- the # means h1  -->
# Friend Finder

<!-- Put a description of what the project is -->
Combining HTML, jQuery, UI-Kit/CSS and RESTFUL ROUTING to build a friend finder app. The 
The app quizes users on ten compatability questions and compares their answers to those of
other users. The comparison returns the best match. 

# Link to deployed site
<!-- make a link to the deployed site --> 
<!-- [What the user will see](the link to the deployed site) -->
[Friend Finder](https://jsutliff.github.io/friendFinder/)

# Images
<!-- take a picture of the image and add it into the readme  -->
<!-- ![image title](path or link to image) -->
[screen shot of completed assignment](assets/images/screenShot.png)


<img src="assets/images/firebaseScreenShot.jpeg">
# technology used
<!-- make a list of technology used -->
<!-- what you used for this web app, like html css -->
- HTML5
- jQuery
- CSS3
- UI-Kit


<!-- 
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item. 
-->


# code snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

```javascript
module.exports = function(app, path) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/', 'home.html'));
  });

  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/', 'survey.html'));
  });

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/', 'home.html'));
  });
}
```
# Explanation of code
The above snipet highlights the use of routing using jQuery. Using express the server
sends a response of the appropriate files. 

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
This assignment was a huge challenge. Learning express was fun and will be very useful
in future projects. Creating an API was a lot of fun as well. It was interesting to see
how you can capture user data and store it for future use. 

# Author 
<!-- make a link to the deployed site and have your name as the link -->
[Jason P. Sutliff](https://jsutliff.github.io/Basic-Portfolio/)