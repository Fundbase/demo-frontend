### Demo Frontend project

A simple project which includes:

* Gulp:
 * haml/coffee/scss compilation
 * static file server with proxy to a Rails backend server
* an AngularJS controller retrieving portfolios from an endpoint
* a page listing the portfolios and showing a badge (directive) from the DemoComponents project

### Dependencies

* `demo-components` repository
 * can be pointed to a local repository, e.g. `"file:///Users/stanley/workspace/demo-components/.git/"` (bower.json)
 * TODO need to solve updating of the depedency; even better would be if the changes in components didn't have to be committed everytime
