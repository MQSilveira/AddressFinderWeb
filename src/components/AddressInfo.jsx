
const AddressInfo = ( data ) => {
    return (
        <div className='address-info'>
            <h2>Informações do endereço</h2>
            <p>CEP: {data.address.cep}</p>
            <p>Logradouro: {data.address.logradouro}</p>
            <p>Bairro: {data.address.bairro}</p>
            <p>Cidade: {data.address.localidade}</p>
            <p>Estado: {data.address.uf}</p>
        </div>
    )
}

export default AddressInfo