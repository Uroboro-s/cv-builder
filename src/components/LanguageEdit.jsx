/* eslint-disable react/prop-types */


function LanguageComponent({details, index, updateDetails}) {

    return (
        <>
            <div className={"language"+index}>

                <br/>
                <input
                    type='text'
                    name = 'language'
                    className="language-input"
                    value={details.languages[index]}
                    onChange={(event) => {
                        let newObj = {...details};
                        newObj.languages[index] = event.target.value;
                        updateDetails(newObj);}}
                />

            </div>
        </>
    )
}

function LanguageEdit({details, updateDetails}) {
    const increaseLanguageCount = () => {
        const newLanguage = "";
        let newObj = {...details};
        newObj.languages.push(newLanguage);
        updateDetails(newObj);
    }
    
    const isButtonVisible = () => {
        let count =0;
        details.languages.forEach(() => {
            count++;
        });
        if(count <= 3){
            return (
                <button type="button" onClick={increaseLanguageCount}>+</button>
            )
        }
        else 
            return null;
    }
    
    return (
        <>
            <h2>Languages:</h2>
            <section className="languages-section">
                {
                    details.languages.map((somevar, index) =>{
                        return (
                            <LanguageComponent
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

export default LanguageEdit;