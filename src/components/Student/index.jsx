import React from 'react'

export default function Student({ id, name, age, onRemove }) {
    return (
        <div className='relative'>
            <div className='absolute right-0 top-20'></div>

            <svg viewBox='0 0 32 38'>
                <g>
                    <path
                        fill='var(--light-color)'
                        d='M 4 33 C 4 26 4 14 16 14 C 28 14 28 26 28 33 Z'
                    ></path>

                    <path
                        fill='var(--primary-color)'
                        d='M 5 34 C 5 26 6 19 14 19 L 14 18 C 11 17 10 14 10 11 C 10 8 13 6 16 6 C 19 6 22 8 22 11 C 22 14 21 17 18 18 L 18 19 C 26 19 27 26 27 34'
                    >
                        <title>{name}</title>
                    </path>

                    <path
                        fill='var(--grey-color)'
                        d='M 24 30 L 25 35 L 23 35 Z'
                    >
                        <title>{name}</title>
                    </path>

                    <path
                        fill='var(--light-color)'
                        d='M 7 36 L 8 30 L 24 30 L 23 36 Z'
                    >
                        <title>{name}</title>
                    </path>
                </g>
            </svg>
            <div className='flex justify-space-between mh-25%'>
                <div>{name}</div>
                <button
                    className='pointer bg-primary flex justify-center align-items-center b-rad-50% p-6'
                    onClick={() =>
                        confirm(
                            `Êtes vous sûr de vouloir supprimer ${name} ?`
                        ) && onRemove(id)
                    }
                >
                    <i className='material-icons rounded font-12'>delete</i>
                </button>
            </div>
        </div>
    )
}
