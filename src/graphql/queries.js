export const NEED_TYPES = `
  query NeedTypes {
    need_type(order_by: {order: asc, id: desc}, where: {_or: [{hidden: {_is_null: true}}, {hidden: { _eq: false}}]}) {
      id
      order
      label
      offer_description
      request_description
    }
  }
`