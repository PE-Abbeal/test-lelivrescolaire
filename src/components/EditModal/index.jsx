import React from 'react'

import Form from '../Form'
import Modal from '../Modal'

export default function EditModal({ defaultValues, ...props }) {
    return (
        <Modal
            className='max-width-90vw md:max-width-70vw height-80vh'
            {...props}
        >
            {({ close, valid }) => (
                <>
                    <div className='absolute right--20 top--20'>
                        <button
                            className='pointer bg-primary flex justify-center align-items-center b-rad-50% p-10'
                            onClick={close}
                        >
                            <i className='material-icons-round'>close</i>
                        </button>
                    </div>

                    <div className='height-100% flex flex-column mb-30'>
                        <h2 className='mb-10'>Modifier un étudiant</h2>

                        <Form
                            id='add-student'
                            onSubmit={valid}
                            defaultValues={defaultValues}
                        />

                        <button
                            type='submit'
                            form='add-student'
                            className='pointer bg-primary flex justify-center align-items-center b-rad-10 ph-20 pv-10 mh-10%'
                        >
                            Modifier
                            <i className='material-icons-round ml-10'>edit</i>
                        </button>
                    </div>
                </>
            )}
        </Modal>
    )
}
