
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['7pbdUuUMhHAoD4ZtuxZ18H'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  