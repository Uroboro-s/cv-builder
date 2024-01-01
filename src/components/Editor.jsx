/* eslint-disable react/prop-types */
//to handle props validation

import PersonalDetailsEdit from "./PersonalDetailsEdit";
import EducationEdit from "./EducationEdit";
import ExperienceEdit from "./ExperienceEdit";
import SkillEdit from "./SkillEdit";
import LanguageEdit from "./LanguageEdit";
import HobbiesEdit from "./HobbiesEdit";
//import { useState } from "react";

function Editor({details, toggleFunction, updateDetails}) {

    //const [value, setValue] = useState('');
    console.log(details);
    //console.log(updateDetails);
    return (
        <>
            <form>
                
                {<PersonalDetailsEdit
                    details = {details}
                    updateDetails = {updateDetails}/>
                }
                
                {<EducationEdit
                    details={details}
                    updateDetails={updateDetails}/>
                }
                
                {<ExperienceEdit
                    details={details}
                    updateDetails={updateDetails}/>
                }
                {<SkillEdit
                    details={details}
                    updateDetails={updateDetails}/>    
                }
                {<HobbiesEdit
                    details={details}
                    updateDetails={updateDetails}/>
                }
                {<LanguageEdit
                    details={details}
                    updateDetails={updateDetails}/>
                }

                <button 
                    type="button"
                    onClick={() =>{toggleFunction()}}> 
                    Submit
                </button>    
            </form>
        </>
    )
}

export default Editor;