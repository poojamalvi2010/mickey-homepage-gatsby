export const SupplierForm = {
    model: "Business",
    format: [
      {
        widths: "equal",
        fields: {
          name: {
            type: "text",
            label: "Legal Business Name"
          },
        },
      },
      {
        widths: "equal",
        fields: {
          contact_first_name: {
            type: "text",
            label: "First Name"
          },
          contact_last_name: {
            type: "text",
            label: "Last Name"
          },
        },
      },
      {
        widths: "equal",
        fields: {
          contact_email: {
            type: "text",
            label: "Email"
          },
          contact_phone: {
            type: "text",
            label: "Phone"
          },
        },
      },
    ],
  };
  