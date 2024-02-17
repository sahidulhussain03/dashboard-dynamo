import React from 'react'

const page = ({ params }: { params: { agencyId: string } }) => {
    return (
        <div>Agency Id: {params.agencyId}</div>
    )
}

export default page