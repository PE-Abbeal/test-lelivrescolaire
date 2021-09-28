import React from 'react'
import { useForm } from 'react-hook-form'

import InputText from '../inputs/Text'

export default function Form({ id, onSubmit, defaultValues }) {
    const { handleSubmit, watch, errors, ...rest } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        criteriaMode: 'firstError',
        defaultValues,
    })

    const form = { errors, ...rest }

    return (
        <>
            <form
                id={id}
                className='flex-1 flex flex-column justify-center mh-auto min-width-50%'
                onSubmit={handleSubmit(onSubmit)}
            >
                <InputText
                    {...form}
                    name='name'
                    label="Nom de l'élève"
                    type='text'
                    className='mb-20'
                    placeholder='Thomas'
                />

                <InputText
                    {...form}
                    name='age'
                    label="Âge de l'élève"
                    type='number'
                    className='mb-20'
                    min={0}
                    placeholder='18 ans'
                />
            </form>
        </>
    )
}
