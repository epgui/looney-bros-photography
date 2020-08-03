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

  const projectTemplate = require.resolve('./src/templates/Project/index.tsx');

  const result = await wrapper(
    graphql(`
      {
        projects: allProjectsYaml {
          nodes {
            slug
            images
          }
        }
      }
    `)
  );

  result.data.projects.nodes.forEach(({ slug, images }) => {
    createPage({
      path: slug,
      component: projectTemplate,
      context: {
        slug,
        images: `/${images}/`,
      },
    });
  });
};
