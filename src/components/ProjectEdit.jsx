/* eslint-disable react/prop-types */

import '../styles/project.css';


function ProjectComponent({details, updateDetails, index}) {
    // console.log(index);
    // console.log(details);
    
    return (
        <>
            <div className={"project"+index}>
                <h2>{details.projects[index].domain}</h2>
                        <label htmlFor='domain' >Domain:</label>
                        <br/>
                        <input
                            type='text'
                            name = 'domain'

                            value={details.projects[index].domain}
                            onChange={(event) => {let newObj = {...details}; newObj.projects[index].domain = event.target.value; updateDetails(newObj)}}
                        />
                        <br/>
                        <label htmlFor="email">Title:</label>
                        <br/>
                        <input
                            type='text'
                            name = 'title'

                            value={details.projects[index].title}
                            onChange={(event) => {let newObj = {...details}; newObj.education[index].title = event.target.value; updateDetails(newObj)}}
                        />
                        <br/>
                        <label htmlFor="number">Start Date:</label>
                        <br/>
                        <input
                            type='date'
                            name = 'start-date'

                            value={details.projects[index].startDate}
                            onChange={(event) => {let newObj = {...details}; newObj.projects[index].startDate = event.target.value; updateDetails(newObj)}}
                        />
                        <br/>
                        <label htmlFor="number">End Date:</label>
                        <br/>
                        <input
                            type='date'
                            name = 'end-date'

                            value={details.projects[index].endDate}
                            onChange={(event) => {let newObj = {...details}; newObj.projects[index].endDate = event.target.value; updateDetails(newObj)}}
                        />
            </div>
        </>
    )
}


function ProjectEdit({details, updateDetails}) {
    const increaseProjectCount = () => {
        const newProject = {
            domain: "",
            title: "",
            description: "",
            technology: "",
            links: "",
            team: 0,
            role: "",
            startDate: "",
            endDate: "",
        };
        let newObj = {...details};
        newObj.projects.push(newProject);
        updateDetails(newObj);
    }
    
    const isButtonVisible = () => {
        let count =0;
        details.projects.forEach(() => {
            count++;
        });
        if(count <= 3){
            return (
                <button type="button" onClick={increaseProjectCount}>+</button>
            )
        }
        else 
            return null;
    }

    return (
        <>
            <h2>Projects:</h2>
            <section className="project-detail-section">
                
                {
                details.projects.map((somevar, index) =>{
                    return (<ProjectComponent
                        details={details}
                        updateDetails={updateDetails}
                        index={index}
                        key={index}/>)
                })
                } 
                
            </section>
            {isButtonVisible()}
        </>
    )
}

export default ProjectEdit;