import React, { useState } from 'react'
import { getCep } from '../services/cepService'
import CepForm from './CepForm'
import AddressInfo from './AddressInfo'
import './ConsultCep.css'
import AddressIcon from '../images/address_icon.png'

const ConsultCep = () => {
    const [cep, setCep] = useState('')
    const [address, setAddress] = useState({})
    const [status, setStatus] = useState(false)
    const [errorText, setErrorText] = useState('')

    const handleCep = async (e) => {
        e.preventDefault()

        const cleanCep = cep.replace('-', '').trim()
        const cepRegex = /^[0-9]{8}$/g

        if (!cepRegex.test(cleanCep)) {
            setStatus(false)
            setAddress({})
            setErrorText('CEP inválido.\nVerifique o CEP e tente novamente.')
            return
        }

        try {
            const response = await getCep(cleanCep)

            if (response.erro) {
                setStatus(false)
                setAddress({})
                setErrorText('CEP não encontrado.\nVerifique o CEP e tente novamente.')

            } else {
                setAddress(response)
                setStatus(true)
                setErrorText('')
            }

        } catch (err) {
            setStatus(false)
            setAddress({})
            setErrorText('Erro ao processar a requisição. \nTente novamente mais tarde.')
            console.log(err.message)
        }
    }

    return (
        <div className='container'>
            <div className='map-container'>
                <img src={ AddressIcon } alt='Address Icon' />
            </div>
            <div className='form-container'>
                <h1>Consultar CEP</h1>
                <CepForm
                    cep={cep}
                    onCepChange={(e) => setCep(e.target.value)}
                    onSubmit={handleCep}
                />
                {status && <AddressInfo address={address} />}
                {errorText && (
                    <div className='error-message'>
                        <p>{errorText}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ConsultCep