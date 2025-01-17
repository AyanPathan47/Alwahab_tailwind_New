import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch: "main",
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'assets/images',
      static: false, //default is false
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blogs",
        label: "Blogs",
        path: "src/pages/blogs",
        fields: [
          {
            name: "layout",
            label: "Layout",
            type: "string",
            required: true,
            options:  ["../../layouts/Right_Blog_Layout.astro", "../../layouts/Left_Blog_Layout.astro", "../../layouts/Center_Blog_Layout.astro"],
          },
          {
            name: "title",
            label: "Title",
            type: "string",
            required: true,
            isTitle: true,
          },
          {
            name: "creationdate",
            label: "Creation Date",
            type: "datetime",
            required: true,
          },
          {
            name: "bannertitle",
            label: "Banner Title",
            type: "string",
            required: true,
          },
          {
            name: "bannerimage",
            label: "Banner Image",
            type: "image",
            required: true,
          },
          {
            name: "section1title",
            label: "Section 1 Title",
            type: "string",
          },
          {
            name: "section1content",
            label: "Section 1 Content",
            type: "string",
          },
          {
            name: "section1image",
            label: "Section 1 Image",
            type: "image",
          },
          {
            name: "section2title",
            label: "Section 2 Title",
            type: "string",
          },
          {
            name: "section2content",
            label: "Section 2 Content",
            type: "string",
          },
          {
            name: "section2image",
            label: "Section 2 Image",
            type: "image",
          },
          {
            name: "section3title",
            label: "Section 3 Title",
            type: "string",
          },
          {
            name: "section3content",
            label: "Section 3 Content",
            type: "string",
          },
          {
            name: "section3image",
            label: "Section 3 Image",
            type: "image",
          },
          {
            name: "body",
            label: "Body",
            type: "rich-text",
            isBody: true,
          },
        ],
      },
    ],
  },
});
