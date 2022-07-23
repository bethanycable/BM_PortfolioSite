import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "kxikngjm",
  dataset: "production",
  apiVersion: "2022-07-19",
  useCdn: true,
  token: process.env.REACT_APP__SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
