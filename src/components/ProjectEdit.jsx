/* eslint-disable react/prop-types */

import '../styles/project.css';


function ProjectComponent({details, updateDetails, index}) {
    // console.log(index);
     console.log(details.projects);
    
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
                        <label htmlFor="title">Title:</label>
                        <br/>
                        <input
                            type='text'
                            name = 'title'

                            value={details.projects[index].title}
                            onChange={(event) => {let newObj = {...details}; newObj.projects[index].title = event.target.value; updateDetails(newObj)}}
                        />
                        <br/>
                        <label htmlFor="start-date">Start Date:</label>
                        <br/>
                        <input
                            type='date'
                            name = 'start-date'

                            value={details.projects[index].startDate}
                            onChange={(event) => {let newObj = {...details}; newObj.projects[index].startDate = event.target.value; updateDetails(newObj)}}
                        />
                        <br/>
                        <label htmlFor="end-date">End Date:</label>
                        <br/>
                        <input
                            type='date'
                            name = 'end-date'

                            value={details.projects[index].endDate}
                            onChange={(event) => {let newObj = {...details}; newObj.projects[index].endDate = event.target.value; updateDetails(newObj)}}
                        />
                        <br/>
                        <label htmlFor="description">Description:</label>
                        <br/>
                        <input
                            type='text'
                            name = 'description'

                            value={details.projects[index].description}
                            onChange={(event) => {let newObj = {...details}; newObj.projects[index].description = event.target.value; updateDetails(newObj)}}
                        />
                        <br/>
                        <label htmlFor="end-date">Technologies:</label>
                        <br/>
                        <input
                            type='text'
                            name = 'technology'

                            value={details.projects[index].technology}
                            onChange={(event) => {let newObj = {...details}; newObj.projects[index].technology = event.target.value; updateDetails(newObj)}}
                        />
                        <br/>
                        <label htmlFor="end-date">Links:</label>
                        <br/>
                        <input
                            type='text'
                            name = 'links'

                            value={details.projects[index].links}
                            onChange={(event) => {let newObj = {...details}; newObj.projects[index].links = event.target.value; updateDetails(newObj)}}
                        />
                        <br/>
                        <label htmlFor="end-date">Team:</label>
                        <br/>
                        <input
                            type='number'
                            name = 'team'

                            value={details.projects[index].team}
                            onChange={(event) => {let newObj = {...details}; newObj.projects[index].team = event.target.value; updateDetails(newObj)}}
                        />
                        <br/>
                        <label htmlFor="end-date">Role:</label>
                        <br/>
                        <input
                            type='text'
                            name = 'role'

                            value={details.projects[index].role}
                            onChange={(event) => {let newObj = {...details}; newObj.projects[index].role = event.target.value; updateDetails(newObj)}}
                        />
                        <br/>
                        
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
        let count =1;
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