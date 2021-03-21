import { useMutation } from 'graphql-hooks'
import React, { useState } from 'react'
import { ADD_BLESSING_NOMINATION } from '../graphql/mutations'
import { useValidEmail, useValidPhone, useValidZip } from '../hooks'
import { Checkbox } from './Checkbox'
import { SelectInput } from './SelectInput'
import { TextArea } from './TextArea'
import { TextInput } from './TextInput'

export const BlessForm = ({ className = '', style = {}, onSubmit }) => {
  const [nominator_name, setNominatorName] = useState('')
  const [nominator_phone, setNominatorPhone] = useState('')
  const phoneValid = useValidPhone(nominator_phone)
  const [text_permission, setTextPermission] = useState(false)
  const [nominator_email, setNominatorEmail] = useState('')
  const validEmail = useValidEmail(nominator_email)
  const [nominator_address, setNominatorAddress] = useState('')
  const [nominator_zip, setNominatorZip] = useState('')
  const validNomZip = useValidZip(nominator_zip)
  const [nominator_affiliations, setNominatorAffiliations] = useState('')

  const [neighbor_name, setNeighborName] = useState('')
  const [neighbor_address, setNeighborAddress] = useState('')
  const [neighbor_zip, setNeighborZip] = useState('')
  const validNeighZip = useValidZip(neighbor_zip)
  const [reason, setReason] = useState('')

  const [financial_value, setFinancialValue] = useState(100)
  const isFinancialValueValid = 100 <= financial_value && financial_value <= 250
  const [timeframe, setTimeframe] = useState('No Rush')
  const [comments, setComments] = useState('')

  const loading = false
  const formValid = (
    nominator_name &&
    ((nominator_phone && phoneValid) || (nominator_email && validEmail)) &&
    nominator_address &&
    nominator_zip && validNomZip &&
    nominator_affiliations &&
    neighbor_name &&
    neighbor_zip && validNeighZip &&
    reason &&
    financial_value && isFinancialValueValid
  )

  const [saveBlessingNomination] = useMutation(ADD_BLESSING_NOMINATION)

  const handleSubmit = async e => {
    e.preventDefault()

    const errorMaybe = await saveBlessingNomination({
      variables: {
        nominator_name,
        nominator_email,
        nominator_phone,
        nominator_address,
        nominator_zip,
        nominator_affiliations,
        neighbor_name,
        neighbor_address,
        neighbor_zip,
        reason,
        financial_value,
        timeframe,
        comments
      }
    })
      .catch(err => err instanceof Error ? err : new Error(JSON.stringify(err)))

    if (errorMaybe instanceof Error || errorMaybe.error) {
      alert('There was a problem with your submission, please check the form and try again.')
      return console.error(errorMaybe)
    }

    if (errorMaybe.data) {
      setNominatorName('')
      setNominatorPhone('')
      setTextPermission(false)
      setNominatorEmail('')
      setNominatorAddress('')
      setNominatorZip('')
      setNominatorAffiliations('')

      setNeighborName('')
      setNeighborAddress('')
      setNeighborZip('')
      setReason('')

      setFinancialValue(100)
      setTimeframe('No Rush')
      setComments('')

      onSubmit?.(errorMaybe.data)
    }
  }

  return <form className='max-w-xl mx-auto' action='#' onSubmit={handleSubmit}>
    <h3 className='text-xl mb-2'>Tell us about yourself</h3>
    <TextInput id='nominator-name' className='mb-4' label='Name' value={nominator_name} onChange={setNominatorName} required />
    <TextInput className={nominator_phone ? '' : 'mb-4'} label='Phone' pattern='^[2-9]{1}(.*[\d]{1}){9}$' type='tel' value={nominator_phone} onChange={setNominatorPhone} required={!nominator_email} />
    {nominator_phone && <Checkbox className='mb-4' label='May we text you at this number?' value={text_permission} onChange={setTextPermission} />}
    <TextInput className='mb-4' label='Email' type='email' value={nominator_email} onChange={setNominatorEmail} required={!nominator_phone} />
    <TextInput id='nominator-address' className='mb-4' label='Street Address' value={nominator_address} onChange={setNominatorAddress} required />
    <TextInput id='nominator-zip' className='mb-4' label='Zip Code' pattern='[0-9-]*' value={nominator_zip} onChange={setNominatorZip} required />
    <TextArea className='mb-4' label='Are you affiliated or involved with any churches or non-profits? If so, list them here.' value={nominator_affiliations} onChange={setNominatorAffiliations} required />
    <h3 className='text-xl mt-4 mb-2'>Tell us about your neighbor</h3>
    <TextInput id='neighbor-name' className='mb-4' label='Name' value={neighbor_name} onChange={setNeighborName} required />
    <TextInput id='neighbor-address' className='mb-4' label='Street Address' value={neighbor_address} onChange={setNeighborAddress} />
    <TextInput id='neighbor-zip' className='mb-4' label='Zip Code' pattern='[0-9-]*' value={neighbor_zip} onChange={setNeighborZip} required />
    <TextArea className='mb-4' label='Why do you want to bless this neighbor?' value={reason} onChange={setReason} required />
    <h3 className='text-xl mt-4 mb-2'>How can we help them?</h3>
    <div className='mb-4 w-full'>
      <label className='text-primary-500'>How much money do they need?</label>
      <div className='text-center'>$<input className='text-input w-16 inline' onChange={e => setFinancialValue(e.target.value)} type='number' value={financial_value} /></div>
      <div className='flex items-center w-full'>
        <span className='mr-2 text-xs'>$100</span>
        <input
          className='flex-grow'
          min='100'
          max='250'
          value={financial_value}
          onChange={e => setFinancialValue(Number(e.target.value))}
          type='range'
        />
        <span className='ml-2 text-xs'>$250</span>
      </div>
    </div>
    <SelectInput
      className='mb-4'
      label='How soon do they need it?'
      options={[{ id: 'No Rush', name: 'No Rush' }, { id: '1 Week', name: '1 Week' }, { id: '2 Weeks', name: '2 Weeks' }, { id: '1 Month', name: '1 Month' }]}
      value={timeframe}
      onChange={setTimeframe}
    />
    <TextArea className='mb-4' label='Additional Comments' value={comments} onChange={setComments} />
    <button type='submit' disabled={loading || !formValid} className='my-6 btn btn-primary'>Submit</button>
    <p className='text-secondary-400'>
      <em className='block mb-4'>
        After you submit this information, our team will examine your nomination and then contact you about next steps toward blessing the neighbor you've nominated.
      </em>
      <em>
        Your privacy and safety is very important to us. The information you choose to share here will not be passed along to anyone outside of the Find A Neighbor team without your direct and explicit consent.
      </em>
    </p>
  </form>
}
