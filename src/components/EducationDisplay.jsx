/* eslint-disable react/prop-types */

export default function Education({details}) {

    return (
        <>
            <p>{details.education[0].institute}</p>
            <hr />
            <p>{details.education[0].degree}</p>
            <hr />
            <p>{details.education[0].startDate}</p>
            <hr />
            <p>{details.education[0].endDate}</p>
            <hr />
        </>
    )
}