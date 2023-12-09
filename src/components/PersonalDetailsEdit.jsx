/* eslint-disable react/prop-types */

function PersonalDetailsEdit({details, updateDetails}) {

    //console.log(details);
    //console.log(updateDetails);

    return (
        <section className = "personal-detail-section"> 
                    <h2>Personal Details</h2>
                    <label htmlFor='name' >Name:</label>
                    <br/>
                    <input
                        type='text'
                        name = 'person-name'
                        id="person-name"
                        value={details.name}
                        onChange={(event) => updateDetails({...details , name: event.target.value})}
                    />
                    <br/>
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input
                        type='email'
                        name = 'person-email'
                        id="person-email"
                        value={details.email}
                        onChange={(event) => updateDetails({...details , email: event.target.value})}
                    />
                    <br/>
                    <label htmlFor="number">Phone Number:</label>
                    <br/>
                    <input
                        type='tel'
                        name = 'person-number'
                        id="person-number"
                        value={details.number}
                        onChange={(event) => updateDetails({...details , number: event.target.value})}
                    />
                </section>
    )
}

export default PersonalDetailsEdit;