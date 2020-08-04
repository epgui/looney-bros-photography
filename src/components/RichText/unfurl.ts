// Function documentation: this is madness.
export const unfurl = {
  asset: (asset, locale) => {
    const contentType = asset.file[locale].contentType;
    switch (contentType) {
      case 'image/jpeg':
        return {
          contentType: asset.file[locale].contentType,
          src: asset.file[locale].url,
          title: asset.title[locale],
          dimensions: {
            width: asset.file[locale].details.image.width,
            height: asset.file[locale].details.image.height,
          },
        };
      case 'image/png':
        return {
          contentType: asset.file[locale].contentType,
          src: asset.file[locale].url,
          title: asset.title[locale],
          dimensions: {
            width: asset.file[locale].details.image.width,
            height: asset.file[locale].details.image.height,
          },
        };
      case 'image/svg+xml':
        return {
          contentType: asset.file[locale].contentType,
          src: asset.file[locale].url,
          title: asset.title[locale],
          dimensions: {
            width: asset.file[locale].details.image.width,
            height: asset.file[locale].details.image.height,
          },
        };
      case 'video/mp4':
        return {
          contentType: asset.file[locale].contentType,
          src: asset.file[locale].url,
          title: asset.title[locale],
          dimensions: {
            width: 1920, // Apparently contentful doesn't provide this information
            height: 1080, // Apparently contentful doesn't provide this information
          },
        };
      default:
        return {
          contentType: 'unknown',
        };
    }
  },
  entry: (entry, locale) => {
    const contentType = entry.sys.contentType.sys.id;
    switch (contentType) {
      case 'testimonial':
        var author = entry.fields.author[locale].fields;
        return {
          contentType: contentType,
          testimonial: {
            quote: entry.fields.quote[locale],
            colour: entry.fields.colour[locale],
            author: {
              name: author.name[locale],
              image: author.image[locale].fields.file[locale].url,
              company: author.company[locale].fields.name[locale],
              position: author.position[locale],
            },
          },
        };
      case 'featureBlurb':
        return {
          contentType: contentType,
          featureBlurb: {
            heading: entry.fields.heading[locale],
            description: entry.fields.description[locale],
            image: entry.fields.image[locale].fields.file[locale].url,
          },
        };
      default:
        return {
          contentType: 'unknown',
        };
    }
  },
};
