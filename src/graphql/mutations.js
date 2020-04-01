export const ADD_REQUEST = `
  mutation AddRequest($needs: [request_need_insert_input!]!, $address: String!, $name: String!, $phone: String, $zip: String!, $email: String, $textPermission: Boolean, $affiliations: String!) {
    insert_request_for_help(objects: {address: $address, email: $email, name: $name, phone: $phone, zip: $zip, text_permission: $textPermission, affiliations: $affiliations, request_needs: {data: $needs}}) {
      affected_rows
    }
  }
`

export const ADD_OFFER = `
  mutation AddOffer($needs: [offer_need_insert_input!]!, $address: String!, $name: String!, $phone: String, $zip: String!, $email: String, $textPermission: Boolean, $background: String!, $affiliations: String!) {
    insert_offer_to_help(objects: {address: $address, email: $email, name: $name, background: $background, affiliations: $affiliations, offer_needs: {data: $needs}, zip: $zip, text_permission: $textPermission, phone: $phone}) {
      affected_rows
    }
  }
`