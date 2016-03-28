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
they change. This can be done with `webpack-dev-server`:

```
$ cd webpack
$ webpack-dev-server
```

Alternatively, we can use the `--watch` flag with `webpack`:

```
$ cd webpack
$ webpack --watch
```

## License

&copy; 2016 Josh Branchaud
