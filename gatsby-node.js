// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors;
    }
    return result;
  });

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const albumTemplate = require.resolve('./src/templates/Album/index.tsx')
  const categoryTemplate = require.resolve('./src/templates/Category/index.tsx');

  const { data } = await wrapper(
    graphql(`
      {
        albums: allContentfulAlbum {
          nodes {
            slug
          }
        }
        categories: allContentfulCategory {
          nodes {
            slug
          }
        }
      }
    `)
  );

  data.albums.nodes.forEach(({ slug }) => {
    createPage({
      path: `album/${slug}`,
      component: albumTemplate,
      context: { slug },
    });
  });

  data.categories.nodes.forEach(({ slug }) => {
    createPage({
      path: slug,
      component: categoryTemplate,
      context: { slug },
    });
  });
};
