import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import Admin from "./collections/Admin";
import Users from "./collections/Users";
import Category from "./collections/Category";
import Course from "./collections/Course";
import Subscription from "./collections/Subscription";
import { Logo } from "./graphics/Logo";
import { Icon } from "./graphics/Icon";
import Order from "./collections/Order";
import LearningPath from "./collections/LearningPath";
import UploadDocument from "./collections/UploadDocument";

export default buildConfig({
  admin: {
    user: Admin.slug,
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- Nubi Academy",
      ogImage: "/assets/nubitransparent.png",
      favicon: "/assets/favicon.ico",
    },
    components: {
      graphics: {
        Icon: Icon,
        Logo: Logo,
      },
    },
  },
  cors: "*",
  editor: slateEditor({}),
  collections: [
    Admin,
    Users,
    Category,
    Course,
    Subscription,
    Order,
    LearningPath,
    UploadDocument,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
