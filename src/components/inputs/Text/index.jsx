import React, { useState, useEffect } from 'react'
import { useWatch } from 'react-hook-form'
import { v4 as uuid } from 'uuid'

import './index.scss'

export const InputText = ({
    // input
    label,
    name,
    type: _type = 'text',
    defaultValue = '',
    placeholder,
    disabled,
    readOnly = disabled,
    className = '',
    inputClassName = '',
    // other
    validIfNoErrors,
    helper,
    maxCharacters,
    // form
    rules,
    formState: { errors },
    control,
    register,
    ...props
}) => {
    const [id] = useState(uuid())
    const [type, setType] = useState(_type)

    const error = errors?.[name]?.message
    const value = useWatch({
        control,
        name,
        defaultValue,
    })

    useEffect(() => {
        if (_type) {
            setType(_type)
        }
    }, [_type])

    return (
        <label
            className={[
                'field',
                className,
                !value && 'empty',
                error && 'invalid',
                validIfNoErrors && !error && rules && rules !== {} && 'valid',
                (disabled || readOnly) && 'disabled',
            ]
                .filter(e => e)
                .join(' ')}
        >
            <label className='label bold mb-4' htmlFor={id}>
                {label || name}
            </label>
            <div className='relative flex align-items-center width-100%'>
                <input
                    className={[
                        'input flex-1',
                        _type === 'password' && 'with-icon',
                        inputClassName,
                    ]
                        .filter(e => e)
                        .join(' ')}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    readOnly={readOnly}
                    disabled={disabled}
                    {...register(name, rules)}
                />

                {_type === 'password' &&
                    (type === 'password' ? (
                        <i className='material-icons-round'>visibility_off</i>
                    ) : (
                        <i className='material-icons-round'>visibility</i>
                    ))}
            </div>

            <div className='flex justify-space-between'>
                <div className='helper flex-1'>
                    {error ? error?.message ?? 'Erreur' : helper}
                </div>

                {maxCharacters && (
                    <div className='helper ml-40'>
                        {value?.length || 0}/{maxCharacters}
                    </div>
                )}
            </div>
        </label>
    )
}

export default InputText
