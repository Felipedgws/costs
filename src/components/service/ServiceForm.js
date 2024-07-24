import styles from '../project/ProjectForm.module.css'
import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ServiceForm({ handleSubmit, btnText, projectData }) {
    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        if (!projectData.services) projectData.services = []
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleOnChange(e) {
        setService({ ...service, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleOnChange}
            />
            <Input
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder="Insira o valor total"
                handleOnChange={handleOnChange}
            />
            <Input
                type="text"
                text="Descrição do serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleOnChange}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ServiceForm