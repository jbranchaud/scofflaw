# scofflaw

> a tool for recording and finding cocktail recipes

Using Rails, React.js, Redux, and PostgreSQL

## Development

### Quick Setup

- Clone the repository
- `bundle install`
- `npm install -g webpack webpack-dev-server`
- `npm install`
- `rake db:create`
- `rake db:migrate`
- `webpack --config webpack/webpack.config.js`

### Assets

The JavaScript is bundled into the asset pipeline using Webpack. During
development, you will likely want Webpack to continually bundle assets as
they change.

```
$ cd webpack
$ webpack --watch
```

### ctags

Make navigating through the code base more pleasant with tags. To generate
tags for this project, run the following command from the root directory:

```bash
$ ctags -R --languages=ruby --exclude=.git --exclude=log .
```

## Testing

Run the integration and other Rails tests with:

```bash
$ rake
```

Run the JavaScript tests (via Mocha) with:

```bash
$ npm run test
```

## License

&copy; 2016 Josh Branchaud
