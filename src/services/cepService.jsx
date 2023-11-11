import axios from 'axios'

export const getCep = async (cep) => {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return response.data
    } catch (err) {
        console.log(err)
        throw new Error('CEP não encontrado')
    }
}