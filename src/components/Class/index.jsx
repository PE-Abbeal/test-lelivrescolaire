import React, { useState } from 'react'

import ErrorBoundary from '../ErrorBoundary'
import Student from '../Student'

function UncatchedClass({ students, onRemove }) {
    const [active, setActive] = useState()

    return (
        <div
            className='grid mh-10vw'
            style={{
                gridTemplateColumns:
                    'repeat(auto-fit, minmax(calc(5rem + 5vw), 1fr)',
            }}
        >
            {students?.map?.((student, index) => (
                <Student
                    key={student?.id}
                    {...student}
                    onRemove={onRemove}
                    onClick={id => setActive(active === id ? null : id)}
                    active={active}
                />
            ))}
        </div>
    )
}

export default function Class(props) {
    return (
        <ErrorBoundary fallback='Houston, on a un problème' showDetails>
            <UncatchedClass {...props} />
        </ErrorBoundary>
    )
}
