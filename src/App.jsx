import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import useArray from './hooks/useArray'

import AddModal from './components/AddModal'
import Class from './components/Class'
import ErrorBoundary from './components/ErrorBoundary'

import STUDENTS from './data/students.json'

import './App.scss'

function UncatchedApp() {
    const [modalOpen, setModalOpen] = useState(false)
    const [students, actions] = useArray(
        Array.isArray(STUDENTS) ? STUDENTS : []
    )

    return (
        <div className='height-100vh overflow-y-auto mb-10vh'>
            <Class
                students={students}
                onRemove={actions.removeById}
                onEdit={actions.modifyById}
            />

            <div className='fixed bottom-20 right-20'>
                <div className='relative'>
                    <button
                        onClick={() => setModalOpen(true)}
                        className='pointer bg-primary flex justify-center align-items-center width-60 height-60 b-rad-50%'
                    >
                        <i className='material-icons-round'>add</i>
                    </button>

                    {modalOpen && (
                        <AddModal
                            onClose={setModalOpen}
                            onValid={({ name, age }) =>
                                actions?.push({
                                    id: uuid(),
                                    name,
                                    age,
                                })
                            }
                        />
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
