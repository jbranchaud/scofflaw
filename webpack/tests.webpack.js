var context = require.context('./assets/javascripts', true, /-test\.jsx?$/);
context.keys().forEach(context);
