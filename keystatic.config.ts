import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: "irfan-wahyu/irfan.site",
  },

  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        subtitle: fields.text({ label: "Subtitle" }),
        applicationName: fields.text({ label: "Nama Aplikasi" }),
        year: fields.text({ label: "Tahun" }),
        duration: fields.text({ label: "Durasi" }),
        status: fields.select({
          label: "Status",
          options: [
            { label: "Completed", value: "completed" },
            { label: "In Progress", value: "in-progress" },
          ],
          defaultValue: "completed",
        }),
        medium: fields.text({ label: "Medium" }),
        order: fields.number({ label: "Urutan", defaultValue: 1 }),
        tools: fields.array(fields.text({ label: "Tool" }), {
          label: "Tools",
          itemLabel: (props) => props.value,
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        coverImage: fields.image({
          label: "Cover",
          directory: "public/images/projects",
          publicPath: "/images/projects/",
        }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "public/images/projects",
              publicPath: "/images/projects/",
            },
          },
        }),
      },
    }),
  },
});
