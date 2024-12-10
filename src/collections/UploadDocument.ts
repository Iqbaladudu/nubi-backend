import { CollectionConfig } from "payload/types";

const UploadDocument: CollectionConfig = {
  slug: "upload-document",
  labels: {
    singular: "Upload Document",
    plural: "Upload Document",
  },
  admin: {
    useAsTitle: "name",
  },
  upload: {
    staticDir: "/assets/documents",
    staticURL: "/assets/documents",
    mimeTypes: ["*"],
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};

export default UploadDocument;
