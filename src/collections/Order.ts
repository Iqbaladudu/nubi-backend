import { CollectionConfig } from "payload/types";
import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId({
  dictionary: "alphanum_upper",
});

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
        readOnly: true,
      },
      defaultValue: () => `NUBI-${uid.stamp(10)}`,
    },
    {
      name: "subscription_type",
      label: "Jenis Langganan",
      type: "relationship",
      relationTo: "subscription",
      required: true,
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
