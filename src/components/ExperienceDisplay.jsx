/* eslint-disable react/prop-types */

export default function Experience({details}) {

    return (
        <>
            <p>{details.experience[0].company}</p>
            <hr />
            <p>{details.experience[0].position}</p>
            <hr />
            <p>{details.experience[0].role}</p>
            <hr />
            <p>{details.experience[0].startDateJob}</p>
            <hr />
            <p>{details.experience[0].endDateJob}</p>
            <hr />
        </>
    )
}