/* eslint-disable react/prop-types */


export default function PersonalDetails({details}) {

    return (
        <>
            <p>{details.name}</p>
            <hr />
            <p>{details.email}</p>
            <hr />
            <p>{details.number}</p>
            <hr />
        </>
    )
}