import { CollectionConfig } from "payload/types";

const Course: CollectionConfig = {
  slug: "course",
  labels: {
    plural: "Kursus",
    singular: "Kursus",
  },
  admin: {
    useAsTitle: "name",
  },
  access: {
    admin: ({ req: { user } }) => {
      return Boolean(user);
    },
    read: ({ req: { user } }) => {
      return Boolean(user);
    },
  },
  fields: [
    {
      name: "name",
      label: "Nama Kursus",
      type: "text",
      required: true,
      access: {
        read: ({ req: { user } }) => {
          if (!user) {
            return true;
          } else {
            return false;
          }
        },
      },
    },
    {
      name: "description",
      label: "Deskripsi",
      type: "richText",
      required: true,
    },
    {
      name: "category",
      label: "Kategori",
      type: "relationship",
      relationTo: ["category"],
      required: true,
    },
    {
      name: "duration",
      label: "Durasi",
      type: "number",
      required: true,
    },
    {
      name: "contents",
      label: "Materi Kursus",
      labels: {
        singular: "Modul",
        plural: "Modul",
      },
      required: false,
      type: "array",
      admin: {
        initCollapsed: false,
      },

      fields: [
        {
          name: "title",
          label: "Judul Materi",
          type: "text",
        },
        {
          name: "content",
          label: "Konten",
          type: "richText",
        },
        {
          name: "attachment",
          label: "Lampiran",
          type: "upload",
          relationTo: "upload-document",
        },
      ],
    },
  ],
};

export default Course;
