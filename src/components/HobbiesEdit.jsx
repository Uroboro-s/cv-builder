/* eslint-disable react/prop-types */


function HobbyComponent({details, index, updateDetails}) {
    
    //console.log(details.hobbies);

    return (
        <>
            <div className={"hobby"+index}>

                <br/>
                <input
                    type='text'
                    name = 'hobby'
                    className="hobby-input"
                    value={details.hobbies[index]}
                    onChange={(event) => {
                        let newObj = {...details};
                        newObj.hobbies[index] = event.target.value;
                        updateDetails(newObj);}}
                />

            </div>
        </>
    )
}


function HobbiesEdit({details, updateDetails}) {
    const increaseDegreeCount = () => {
        const newHobby = "";
        let newObj = {...details};
        newObj.hobbies.push(newHobby);
        updateDetails(newObj);

    }
    
    const isButtonVisible = () => {
        let count =0;
        details.hobbies.forEach(() => {
            count++;
        });
        if(count <= 3){
            return (
                <button type="button" onClick={increaseDegreeCount}>+</button>
            )
        }
        else 
            return null;
    }
    
    return (
        <>
            <h2>Hobbies:</h2>
            <section className="hobbies-section">
                {
                    details.hobbies.map((somevar, index) =>{
                        return (
                            <HobbyComponent
                                details={details}
                                updateDetails={updateDetails}
                                index={index}
                                key={index}
                            />
                        )
                    })
                }
            </section>
            {isButtonVisible()}
        </>
    )
}

export default HobbiesEdit;