// ProjectForm.js
import "./ProjectForm.css"
import React, { useState, useEffect} from 'react';
import showToast from 'crunchy-toast';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component


const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    ownerName: '',
    description: '',
    codeLink: '',
    demoLink: '',
  });

  const [isModalVisible, setModalVisible] = useState(false);
  const [projectList, setProjectList] = useState([]); // State to store the list of projects

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     image: file,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add logic to send formData to MongoDB server

    try {
      const formDataObj = new FormData();

      for (const key in formData) {
        formDataObj.append(key, formData[key]);
      }

      const response = await fetch('https://code-nest-backend.onrender.com/api/projects', {
        method: 'POST',
        body: formDataObj,
      });

      if (response.ok) {
        console.log('Data successfully sent to MongoDB server');
        showToast('Data addded Successfully', 'success', 2000);
      } else {
        console.error('Failed to send data to MongoDB server');
        showToast('An error occurred', 'alert', 6000);
      }


    // Clear form data after submission
    setFormData({
      projectName: '',
      ownerName: '',
      description: '',
      codeLink: '',
      demoLink: '',
    });

    // Hide the modal after submission
    setModalVisible(false);

     // Fetch the updated list of projects after adding a new project
     const projectsResponse = await fetch('https://code-nest-backend.onrender.com/api/projects');
     const projectsData = await projectsResponse.json();
     setProjectList(projectsData);
   } catch (error) {
     console.error('Error:', error.message);
     showToast('Fetching data failed', 'warning', 4000);
   }
  };

  const handleCancel = () => {
    // Hide the modal when the "CANCEL" button is clicked
    setModalVisible(false);
  };

  const handleAddButtonClick = () => {
    // Show the modal when the "Add" button is clicked
    setModalVisible(true);
  };

  useEffect(() => {
    // Fetch projects when the component mounts
    const fetchProjects = async () => {
      try {
        const projectsResponse = await fetch('https://code-nest-backend.onrender.com/api/projects');
        const projectsData = await projectsResponse.json();
        setProjectList(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []); // Empty dependency array to fetch projects only once when the component mounts




  return (
    <div className="project-form-container">
      <h1>Add your <span className="text sec-text">PROJECT</span> to the library..</h1>
      <button onClick={handleAddButtonClick}>Add</button>

      {/* Conditionally render the modal based on state */}
      {isModalVisible && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <label>
              Project Name:
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Owner Name:
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                maxLength={500}
                required
              />
            </label>
            {/* <label>
              Upload Demo Image:
              <input type="file" onChange={handleImageChange} accept=".jpg, .png" required />
            </label> */}
            <label>
              Code Link:
              <input
                type="text"
                name="codeLink"
                value={formData.codeLink}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Live Demo Link (optional):
              <input
                type="text"
                name="demoLink"
                value={formData.demoLink}
                onChange={handleChange}
              />
            </label>
            <div className="form-footer">
              <button type="submit">ADD</button>
              <button type="button" onClick={handleCancel}>
                CANCEL
              </button>
            </div>
          </form>
        </div>
      )}
      {/* Render the ProjectCard for each project in the projectList */}
      <div className="project-card-container">
        {projectList.map((project) => (
          <ProjectCard key={project._id} projectData={project} />
        ))}
      </div>
    </div>

  );
};

export default ProjectForm;
