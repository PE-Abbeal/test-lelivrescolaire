import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import useArray from './hooks/useArray'

import Class from './components/Class'
import ErrorBoundary from './components/ErrorBoundary'
import Modal from './components/Modal'

import './App.scss'

import STUDENTS from './data/students.json'

function UncatchedApp() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [students, actions] = useArray(
        Array.isArray(STUDENTS) ? STUDENTS : []
    )

    return (
        <div className='App'>
            <Class
                students={students}
                onRemove={id => actions.removeById(id)}
            />

            <div className='fixed bottom-20 right-20'>
                <div className='relative'>
                    <button
                        onClick={() => setMenuOpen(true)}
                        className='pointer bg-primary flex justify-center align-items-center width-60 height-60 b-rad-50%'
                    >
                        <i className='material-icons rounded'>add</i>
                    </button>

                    {menuOpen && (
                        <Modal
                            onClose={setMenuOpen}
                            onValid={({ name, age }) =>
                                actions?.push({
                                    id: uuid(),
                                    name: name?.value,
                                    age: age?.value,
                                })
                            }
                        >
                            {({ close, valid }) => (
                                <>
                                    <div className='absolute right--20 top--20'>
                                        <button
                                            className='pointer bg-primary flex justify-center align-items-center b-rad-50% p-10'
                                            onClick={close}
                                        >
                                            <i className='material-icons rounded'>
                                                close
                                            </i>
                                        </button>
                                    </div>

                                    <div className='height-100% flex flex-column mb-30'>
                                        <h2 className='mb-10'>
                                            Ajouter un étudiant
                                        </h2>

                                        <form
                                            id='add-student'
                                            className='flex-1 flex flex-column mh-auto'
                                            onSubmit={e => {
                                                e.preventDefault()
                                                valid(event.target)
                                            }}
                                        >
                                            <input
                                                name='name'
                                                type='text'
                                                className='b-0 bb-1 b-light pv-10 ph-6 font-16 mb-30'
                                                placeholder='Thomas'
                                            />

                                            <input
                                                name='age'
                                                type='number'
                                                min={0}
                                                className='b-0 bb-1 b-light pv-10 ph-6 font-16 mb-30'
                                                placeholder='24 ans'
                                            />
                                        </form>

                                        <button
                                            type='submit'
                                            form='add-student'
                                            className='bg-primary flex justify-center align-items-center b-rad-10 ph-20 pv-10'
                                        >
                                            Ajouter
                                            <i className='material-icons rounded ml-10'>
                                                check
                                            </i>
                                        </button>
                                    </div>
                                </>
                            )}
                        </Modal>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function App() {
    return (
        <ErrorBoundary fallback='Houston, on a un problème' showDetails>
            <UncatchedApp />
        </ErrorBoundary>
    )
}
