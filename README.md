### Demo Frontend project

A simple project which includes:

* Gulp:
 * haml/coffee/scss compilation
 * static file server with proxy to a Rails backend server
* an AngularJS controller retrieving portfolios from an endpoint
* a page listing the portfolios and showing a badge (directive) from the DemoComponents project

### Dependencies

* `demo-components` repository
 * for local development (until bower supports using a local-directory dependency from a git directory), we can use `bower link` (`bower link` in the `demo-components` and then `bower link demo-components` in `demo-frontend`; this creates a symlink in `bower_components`)

### How to run

* `$ gulp`
 * sometimes it fails to start, so try again (needs to be fixed)
