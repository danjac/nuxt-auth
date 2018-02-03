# nuxt-auth

Experimenting with authentication and Nuxt.js.

See https://nuxtjs.org/examples/auth-routes/

Instead of running nuxt directly, we use a server.js file to bootstrap the application. We can add a couple of authentication routes there which manage user details
(including auth tokens for external API) in a secure cookie.

A nuxtServerInit call in vuex fetches the auth info on page load, and adds it to the store.

The secure view shows example of middleware to prevent page being visible if user is authenticated. The middleware and any pages just access this info directly from tthe vuex store.

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
