# url-redirector

Dockerized express app to register a Url which enables to redirection to that Url with given path.

The base url is registered with `redirectUrl` query parameter like this;

`http://ec2-3-236-152-196.compute-1.amazonaws.com:3030/oaysus/damda?redirectUrl=https://936b-185-111-116-221.eu.ngrok.io`

The app can be used for more than one project and more than one developer by the path structure.

- First path is used for naming the project; `oaysus` in the example
- Second path is used for naming the developer; `damda` in the example

To redirect any path to the registered url `redirectPath` parameter must be entered to the url.

`http://ec2-3-236-152-196.compute-1.amazonaws.com:3030/oaysus/damda?redirectPath=/some-path?someParam=null`

redirects to 

`https://936b-185-111-116-221.eu.ngrok.io/some-path?redirectPath=/some-path?someParam=null`

`redirectPath` param is not deleted from redirection parameters to pass the hmac verification on shopify authentication.
