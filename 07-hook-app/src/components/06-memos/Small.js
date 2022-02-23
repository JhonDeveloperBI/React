import React from 'react'

export const Small = React.memo(({ value }) => { // memorizar something

    return (
        <small> { value } </small>
    )
});

