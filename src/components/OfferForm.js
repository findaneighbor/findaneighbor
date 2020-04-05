import React, { useState, useEffect, useMemo, useRef } from 'react'
import { useQuery, useMutation } from 'graphql-hooks'
import { NEED_TYPES } from '../graphql/queries'
import { SelectNeed, TextInput, Checkbox, TextArea } from '.'
import { ADD_OFFER } from '../graphql'

const isDigitRegex = /^\d$/
const isEmailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const isZipRegex = /^[0-9-]*$/

export const OfferForm = ({ className = '', style = {}, onSubmit = e => null }) => {
  const { data: { need_type: needTypes = [] } = {}, error: queryError } = useQuery(NEED_TYPES)
  const [addOffer, { error: mutationError, loading }] = useMutation(ADD_OFFER)

  useEffect(() => {
    if (queryError) {
      console.error('query error:', queryError)
    }
  }, [queryError])

  const [needList, setNeedList] = useState({})
  const [name, setName] = useState('')

  const [phone, setPhone] = useState('')
  const phoneValid = useMemo(() => {
    const number = phone.split('').filter(c => isDigitRegex.test(c))

    return number.length === 10 && number[0] !== '1'
  }, [phone])

  const [textPermission, setTextPermission] = useState(false)

  const [email, setEmail] = useState('')
  const emailValid = useMemo(() => isEmailRegex.test(email), [email])

  const [zip, setZip] = useState('18951')
  const zipValid = useMemo(() => isZipRegex.test(zip), [zip])

  const [address, setAddress] = useState('')

  const [affiliations, setAffiliations] = useState('')
  const [motivation, setMotivation] = useState('')
  const [background, setBackground] = useState('')

  const [advocate, setAdvocate] = useState(false)

  const formValid = ((email && emailValid) || (phone && phoneValid)) &&
    (zip && zipValid) &&
    name &&
    address &&
    affiliations &&
    motivation &&
    background &&
    Object.keys(needList).some(id => needList[id].selected && needList[id].description)

  const handleSubmit = async e => {
    e.preventDefault()

    const needs = Object.keys(needList)
      .filter(id => needList[id].selected)
      .map(id => ({ need_type_id: Number(id), description: needList[id].description }))

    if (!formValid || !needs.length) {
      return
    }
    
    const result = await addOffer({
      variables: {
        needs,
        name,
        address,
        zip,
        phone: phone.split('').filter(c => isDigitRegex.test(c)).slice(0, 10).join('') || null,
        email: email || null,
        textPermission: phone ? textPermission : null,
        background,
        motivation,
        affiliations,
        advocate
      }
    })
      .catch(err => err instanceof Error ? err : new Error(JSON.stringify(err)))

    if (result instanceof Error || result.error) {
      return console.error(result)
    }

    setNeedList({})
    setName('')
    setPhone('')
    setTextPermission(false)
    setEmail('')
    setZip('18951')
    setAddress('')
    setAffiliations('')
    setMotivation('')
    setBackground('')
    setAdvocate(false)

    onSubmit()
  }

  useEffect(() => {
    const realPhone = phone.split('').filter(c => isDigitRegex.test(c)).join('')

    if (realPhone.charAt(0) === '1') {
      return setPhone(realPhone.slice(1, 11))
    }

    setPhone(realPhone.slice(0, 10))
  }, [phone])

  return <form className='max-w-xl mx-auto' action='#' onSubmit={handleSubmit}>
    <h3 className='text-xl'>How can you help? <span className='text-secondary-400'>*</span></h3>
    {needTypes.map(need => <SelectNeed className='mt-2' key={need.id} need={need} updateNeed={setNeedList} needs={needList} offer />)}
    <h3 className='text-xl mt-4'>How can we contact you?</h3>
    <TextInput className='mb-4' label='Name' value={name} onChange={setName} required />
    <TextInput className={phone ? '' : 'mb-4'} label='Phone' pattern='^[2-9]{1}(.*[\d]{1}){9}$' type='tel' value={phone} onChange={setPhone} required={!email} />
    {phone && <Checkbox className='mb-4' label='May we text you at this number?' value={textPermission} onChange={setTextPermission} />}
    <TextInput className='mb-4' label='Email' type='email' value={email} onChange={setEmail} required={!phone} />
    <TextInput className='mb-4' label='Zip Code' pattern='[0-9-]*' value={zip} onChange={setZip} required />
    <TextInput className='mb-4' label='Street Address' value={address} onChange={setAddress} required />
    <h3 className='text-xl mt-4'>Tell us more about yourself.</h3>
    <TextArea className='mb-4' label='Are you affiliated or involved with other churches or non-profits? If so, list them here.' value={affiliations} onChange={setAffiliations} required />
    <TextArea className='mb-4' label='Do you have any personal or professional experience in the area you are offering to help?' value={background} onChange={setBackground} required />
    <TextArea className='mb-8' label='What motivates you to get involved in service to others?' value={motivation} onChange={setMotivation} required />
    <Checkbox className='mb-2' label='Are you interested in being a Neighborhood Advocate?' value={advocate} onChange={setAdvocate} />
    <p className='text-justify mb-8'>Neighborhood Advocates are those looking to invest more time in their neighborhood and would be willing to help coordinate connections and services in their local area.</p>
    <button type='submit' disabled={loading || !formValid} className='my-6 btn btn-primary'>Submit</button>
    <p className='text-secondary-400'>
      <em className='block mb-4'>
        After you submit this information, we will keep an eye out for a neighbor who needs the kind of help you can provide. If we think a good connection can be made, we will contact you directly and let you decide if the fit is good before sharing anything with that person.
      </em>
      <em>
        Your privacy and safety is very important to us. The information you choose to share here will not be passed along to anyone without your direct and explicit consent.
      </em>
    </p>
  </form>
}