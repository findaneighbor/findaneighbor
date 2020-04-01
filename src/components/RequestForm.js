import React, { useState, useEffect, useMemo, useRef } from 'react'
import { useQuery, useMutation } from 'graphql-hooks'
import { NEED_TYPES } from '../graphql/queries'
import { SelectNeed, TextInput, Checkbox } from '.'
import { ADD_REQUEST } from '../graphql'

const isDigitRegex = /^\d$/
const isEmailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const isZipRegex = /^[0-9-]*$/

export const RequestForm = ({ className = '', style = {} }) => {
  const { data: { need_type: needTypes = [] } = {}, error: queryError } = useQuery(NEED_TYPES)
  const [addRequest, { error: mutationError, loading }] = useMutation(ADD_REQUEST)

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

  const formValid = name && ((email && emailValid) || (phone && phoneValid)) && address && (zip && zipValid) && Object.keys(needList).some(id => needList[id].selected && needList[id].description)

  const handleSubmit = async e => {
    e.preventDefault()

    const needs = Object.keys(needList)
      .filter(id => needList[id].selected)
      .map(id => ({ need_type_id: Number(id), description: needList[id].description }))

    if (!formValid || !needs.length) {
      return
    }
    
    const result = await addRequest({
      variables: {
        needs,
        name,
        address,
        zip,
        phone: phone || null,
        email: email || null,
        textPermission: phone ? textPermission : null
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
  }

  return <form className='max-w-xl mx-auto' action='#' onSubmit={handleSubmit}>
    <h3 className='text-xl'>What need(s) do you have? <span className='text-secondary-400'>*</span></h3>
    {needTypes.map(need => <SelectNeed className='mt-2' key={need.id} need={need} updateNeed={setNeedList} needs={needList} request />)}
    <h3 className='text-xl mt-4'>How can we contact you?</h3>
    <TextInput className='mb-4' label='Name' value={name} onChange={setName} required />
    <TextInput className={phone ? '' : 'mb-4'} label='Phone' pattern='^[2-9]{1}(.*[\d]{1}){9}$' type='tel' value={phone} onChange={setPhone} required={!email} />
    {phone && <Checkbox className='mb-4' label='May we text you at this number?' value={textPermission} onChange={setTextPermission} />}
    <TextInput className='mb-4' label='Email' type='email' value={email} onChange={setEmail} required={!phone} />
    <TextInput className='mb-4' label='Zip Code' pattern='[0-9-]*' value={zip} onChange={setZip} required />
    <TextInput className='mb-4' label='Street Address' value={address} onChange={setAddress} required />
    <button type='submit' disabled={loading || !formValid} className='my-6 btn btn-primary'>Submit</button>
    <p className='text-secondary-400'><em>Your privacy and safety is very important to us. The information you choose to share here will not be passed along to anyone without your direct and explicit consent. After you submit this information, we will keep an eye out for a neighbor who can help in a way that matches your needs. If we think a good connection can be made, we will contact you directly and let you decide if the fit is good before sharing anything with that person.</em></p>
  </form>
}