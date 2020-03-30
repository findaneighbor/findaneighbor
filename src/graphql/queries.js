export const NEED_TYPES = `
  query NeedTypes {
    need_type(order_by: { order: asc, id: desc }) {
      id
      order
      label
      offer_description
      request_description
    }
  }
`