export const NEED_TYPES = `
  query NeedTypes {
    need_type(order_by: {order: asc, id: desc}, where: { hidden: { _eq: false } }) {
      id
      order
      label
      offer_description
      request_description
    }
  }
`

export const PARTNERS = `
  query Partners {
    partner (order_by: { order: desc }, where: { hidden: { _eq: false } }) {
      id
      name
      mission_statement
      website
      address
      city
      state
      zip
      hours
      contact_name
      contact_email
      contact_phone
      order
      partner_needs (order_by: { order: desc }) {
        id
        name
        description
        order
      }
    }
  }
`

export const SUCCESS_STORIES = `
  query successStories {
    success_story (order_by: { order: asc }) {
      id
      anonymized_name
      testimonial
      location
    }
  }
`

export const SUCCESS_STORY_COUNT = `
  query successStoriesCount {
    success_story_aggregate {
      aggregate {
        count
      }
    }
  }
`
