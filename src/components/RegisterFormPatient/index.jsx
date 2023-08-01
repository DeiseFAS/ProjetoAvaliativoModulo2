import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import InputMask from 'react-input-mask'

import "./styles.css";

const RegisterFormPatient = () => {
  const [fullName, setFullName] = useState('')
  const [gender, setGender] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [cpf, setCPF] = useState('')
  const [rg, setRG] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [birthplace, setBirthplace] = useState('')
  const [emergencyContact, setEmergencyContact] = useState('')
  const [allergies, setAllergies] = useState('')
  const [specialCare, setSpecialCare] = useState('')
  const [healthInsurance, setHealthInsurance] = useState('')
  const [insuranceNumber, setInsuranceNumber] = useState('')
  const [insuranceValidity, setInsuranceValidity] = useState('')
  const [address, setAddress] = useState({
    cep: '',
    city: '',
    state: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    reference: ''
  })
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    birthdate: '',
    cpf: '',
    rg: '',
    maritalStatus: '',
    phone: '',
    email: '',
    birthplace: '',
    emergencyContact: '',
    allergies: '',
    specialCare: '',
    healthInsurance: '',
    insuranceNumber: '',
    insuranceValidity: '',
    address
     })

  const handleInputChange = event => {
    const { name, value } = event.target
    switch (name) {
      case 'fullName':
        setFullName(value)
        break
      case 'gender':
        setGender(value)
        break
      case 'birthdate':
        setBirthdate(value)
        break
      case 'cpf':
        setCPF(value)
        break
      case 'rg':
        setRG(value)
        break
      case 'maritalStatus':
        setMaritalStatus(value)
        break
      case 'phone':
        setPhone(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'birthplace':
        setBirthplace(value)
        break
      case 'emergencyContact':
        setEmergencyContact(value)
        break
      case 'allergies':
        setAllergies(value)
        break
      case 'specialCare':
        setSpecialCare(value)
        break
      case 'healthInsurance':
        setHealthInsurance(value)
        break
      case 'insuranceNumber':
        setInsuranceNumber(value)
        break
      case 'insuranceValidity':
        setInsuranceValidity(value)
        break
      default:
        break
    }
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleAddressChange = event => {
    const { name, value } = event.target
    setAddress(prevAddress => ({
      ...prevAddress,
      [name]: value
    }))
  }

  const fetchAddressData = async cep => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      const { data } = response
      setAddress({
        cep: data.cep,
        city: data.localidade,
        state: data.uf,
        street: data.logradouro,
        complement: data.complemento,
        neighborhood: data.bairro,
        reference: ''
      })
    } catch (error) {
      console.log('Erro ao buscar o endereço:', error)
    }
  }

  const handleCepBlur = event => {
    const cep = event.target.value.replace(/\D/g, '')
    if (cep.length === 8) {
      fetchAddressData(cep)
    }
  }

  const handleSubmit = async event => {
    event.preventDefault()
    // Verifica os dados antes de cadastrar
    // if (validateForm()) {
    // Simulação de salvamento com animação
    try {

      // campos do formulário com os campos de endereço
      const patientData = {
        fullName,
        gender,
        birthdate,
        cpf,
        rg,
        maritalStatus,
        phone,
        email,
        birthplace,
        emergencyContact,
        allergies,
        specialCare,
        healthInsurance,
        insuranceNumber,
        insuranceValidity,
        address, // Inclui o objeto de endereço no pacienteData
      };



      await axios.post('http://localhost:3000/patients', patientData)
      // Limpar o formulário após salvar
      setFormData({
        fullName: '',
        gender: '',
        birthdate: '',
        cpf: '',
        rg: '',
        maritalStatus: '',
        phone: '',
        email: '',
        birthplace: '',
        emergencyContact: '',
        allergies: '',
        specialCare: '',
        healthInsurance: '',
        insuranceNumber: '',
        insuranceValidity: '',
        // address: {
          cep: '',
          city: '',
          state: '',
          street: '',
          number: '',
          complement: '',
          neighborhood: '',
          reference: ''
        // }
      })

      toast.success('Dados salvos com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // exibição da notificação
        hideProgressBar: true, // esconde a barra de progresso da notificação
      });

      console.log('Dados salvos com sucesso!')
    } catch (error) {
      toast.error('Erro ao salvar os dados!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });
      console.error('Erro ao salvar os dados:', error)
    }
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      // limpa o formulário após salvar
      resetForm()
    }, 2000)
    // }
  }

  const validateForm = () => {

  }

  const resetForm = () => {
    setFullName('')
    setGender('')
    setBirthdate('')
    setCPF('')
    setRG('')
    setMaritalStatus('')
    setPhone('')
    setEmail('')
    setBirthplace('')
    setEmergencyContact('')
    setAllergies('')
    setSpecialCare('')
    setHealthInsurance('')
    setInsuranceNumber('')
    setInsuranceValidity('')
    setAddress({
      cep: '',
      city: '',
      state: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      reference: ''
    })
  }

  return (
    <div>
      
      <form onSubmit={handleSubmit} className="patient">
        <div>
          <label htmlFor='fullName'>Nome Completo:</label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            value={formData.fullName}
            onChange={handleInputChange}
            required
            minLength={5}
            maxLength={50}
          />
        </div>

        <div>
          <label htmlFor='gender'>Gênero:</label>
          <select
            id='gender'
            name='gender'
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value=''>Selecione</option>
            <option value='masculino'>Masculino</option>
            <option value='feminino'>Feminino</option>
            <option value='outro'>Outro</option>
          </select>
        </div>
        <div>
          <label htmlFor='birthdate'>Data de Nascimento:</label>
          <input
            type='date'
            id='birthdate'
            name='birthdate'
            value={formData.birthdate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='cpf'>CPF:</label>
          <InputMask
          mask='999.999.999-99'
          maskChar=' '
          type='text'
          id='cpf'
          name='cpf'
          value={formData.cpf}
          onChange={handleInputChange}
          placeholder="999.999.999-99"
          required
        />
        </div>
        <div>
          <label htmlFor='rg'>RG com órgão expedidor:</label>
          <input
            type='text'
            id='rg'
            name='rg'
            value={formData.rg}
            onChange={handleInputChange}
            maxLength={20}
            required
          />
        </div>
        <div>
          <label htmlFor='maritalStatus'>Estado Civil:</label>
          <select
            id='maritalStatus'
            name='maritalStatus'
            value={formData.maritalStatus}
            onChange={handleInputChange}
            required
          >
            <option value=''>Selecione</option>
            <option value='solteiro(a)'>Solteiro(a)</option>
            <option value='casado(a)'>Casado(a)</option>
            <option value='divorciado(a)'>Divorciado(a)</option>
            <option value='viuvo(a)'>Viúvo(a)</option>
          </select>
        </div>
        <div>
          <label htmlFor='phone'>Telefone:</label>
          <InputMask
          mask='(99)99999-9999'
          maskChar=' '
          type='text'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="(99)99999-9999"
          required
        />
        </div>
        <div>
          <label htmlFor='email'>E-mail:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='birthplace'>Naturalidade:</label>
          <input
            type='text'
            id='birthplace'
            name='birthplace'
            value={formData.birthplace}
            onChange={handleInputChange}
            minLength={5}
            maxLength={50}
            required
          />
        </div>
        <div>
          <label htmlFor='emergencyContact'>Contato de Emergência:</label>
          <InputMask
          mask='(99)99999-9999'
          maskChar=' '
          type='text'
          id='emergencyContact'
          name='emergencyContact'
          value={formData.emergencyContact}
          onChange={handleInputChange}
          placeholder="(99)99999-9999"
          required
        />
        </div>
        <div>
          <label htmlFor='allergies'>Lista de Alergias:</label>
          <textarea
            id='allergies'
            name='allergies'
            value={formData.allergies}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='specialCare'>Lista de Cuidados Específicos:</label>
          <textarea
            id='specialCare'
            name='specialCare'
            value={formData.specialCare}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='healthInsurance'>Convênio:</label>
          <input
            type='text'
            id='healthInsurance'
            name='healthInsurance'
            value={formData.healthInsurance}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='insuranceNumber'>Número do Convênio:</label>
          <input
            type='text'
            id='insuranceNumber'
            name='insuranceNumber'
            value={formData.insuranceNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='insuranceValidity'>Validade do Convênio:</label>
          <input
            type='date'
            id='insuranceValidity'
            name='insuranceValidity'
            value={formData.insuranceValidity}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='cep'>CEP:</label>
          <input
            type='text'
            id='cep'
            name='cep'
            value={address.cep}
            onChange={handleAddressChange}
            onBlur={handleCepBlur}
            required
          />
        </div>
        <div>
          <label htmlFor='city'>Cidade:</label>
          <input
            type='text'
            id='city'
            name='city'
            value={address.city}
            onChange={handleAddressChange}
            readOnly
            required
          />
        </div>
        <div>
          <label htmlFor='state'>Estado:</label>
          <input
            type='text'
            id='state'
            name='state'
            value={address.state}
            onChange={handleAddressChange}
            readOnly
            required
          />
        </div>
        <div>
          <label htmlFor='street'>Logradouro:</label>
          <input
            type='text'
            id='street'
            name='street'
            value={address.street}
            onChange={handleAddressChange}
            readOnly
            required
          />
        </div>
        <div>
          <label htmlFor='number'>Número:</label>
          <input
            type='text'
            id='number'
            name='number'
            value={address.number}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div>
          <label htmlFor='complement'>Complemento:</label>
          <input
            type='text'
            id='complement'
            name='complement'
            value={address.complement}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label htmlFor='neighborhood'>Bairro:</label>
          <input
            type='text'
            id='neighborhood'
            name='neighborhood'
            value={address.neighborhood}
            onChange={handleAddressChange}
            readOnly
            required
          />
        </div>
        <div>
          <label htmlFor='reference'>Ponto de Referência:</label>
          <input
            type='text'
            id='reference'
            name='reference'
            value={address.reference}
            onChange={handleAddressChange}
          />
        </div>

        <div className="bts">
          <button type='submit' disabled={isSaving}>
            {isSaving ? 'Salvando...' : 'Salvar'}
          </button>
          <button type='button' disabled>
            Editar
          </button>
          <button type='button' disabled>
            Deletar
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default RegisterFormPatient
