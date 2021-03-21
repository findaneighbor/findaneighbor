export const ADD_REQUEST = `
  mutation AddRequest($needs: [request_need_insert_input!]!, $address: String!, $name: String!, $phone: String, $zip: String!, $email: String, $textPermission: Boolean, $affiliations: String!) {
    insert_request_for_help(objects: {address: $address, email: $email, name: $name, phone: $phone, zip: $zip, text_permission: $textPermission, affiliations: $affiliations, request_needs: {data: $needs}}) {
      affected_rows
    }
  }
`

export const ADD_OFFER = `
  mutation AddOffer($needs: [offer_need_insert_input!]!, $address: String!, $name: String!, $phone: String, $zip: String!, $email: String, $textPermission: Boolean, $background: String!, $affiliations: String!, $motivation: String!, $advocate: Boolean) {
    insert_offer_to_help(objects: {address: $address, email: $email, name: $name, background: $background, affiliations: $affiliations, motivation: $motivation, advocate: $advocate, offer_needs: {data: $needs}, zip: $zip, text_permission: $textPermission, phone: $phone}) {
      affected_rows
    }
  }
`

export const ADD_BLESSING_NOMINATION = `
  mutation AddBlessingNomination ($comments: String, $financial_value: Int!, $neighbor_address: String, $neighbor_name: String!, $neighbor_zip: String!, $nominator_address: String!, $nominator_affiliations: String!, $nominator_email: String, $nominator_name: String!, $nominator_phone: String, $nominator_text_permission: Boolean = false, $nominator_zip: String!, $reason: String!, $timeframe: String!) {
    insert_blessing_nomination(objects: {comments: $comments, financial_value: $financial_value, neighbor_address: $neighbor_address, neighbor_zip: $neighbor_zip, nominator_address: $nominator_address, nominator_affiliations: $nominator_affiliations, nominator_email: $nominator_email, nominator_name: $nominator_name, nominator_phone: $nominator_phone, nominator_text_permission: $nominator_text_permission, nominator_zip: $nominator_zip, reason: $reason, neighbor_name: $neighbor_name, timeframe: $timeframe}) {
      affected_rows
    }
  }
`
