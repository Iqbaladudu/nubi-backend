import { CollectionConfig } from "payload/types";

const Order: CollectionConfig = {
  slug: "orders",
  labels: {
    plural: "Orders",
    singular: "Order",
  },
  admin: {
    useAsTitle: "order_number",
  },
  fields: [
    {
      name: "order_number",
      label: "Order Number",
      type: "text",
      required: true,
      admin: {
        readOnly: false,
      },
      defaultValue: () => `NUBI-`,
    },
    {
      name: "subscription_type",
      label: "Jenis Langganan",
      type: "relationship",
      relationTo: "subscription",
    },
    {
      name: "course_item",
      label: "Nama Kursus",
      type: "relationship",
      relationTo: "course",
    },
    {
      name: "user",
      label: "Pengguna",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      required: true,
      options: [
        { label: "Selesai", value: "done" },
        { label: "Pending", value: "Pending" },
      ],
    },
  ],
};

export default Order;
