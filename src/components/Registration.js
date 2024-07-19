import {useContext, useState} from 'react';
import image from './image.jpeg';
import { useNavigate } from 'react-router-dom';
import { FormDataContext } from '../FormDataContext';
function Registration() {
  const [formData, setFormData]= useState({
    username:'',
    email:'',
    age:'',
    occupation:'',
    site:'',
    language_framework:[],
    suggestion:'',
  });
  
  const {setFormDataContext} = useContext(FormDataContext)
  const navigate = useNavigate();

  const [errors, setErrors]= useState({});


  const handleChange=(e)=>{
       const {name,value}=e.target;
       setFormData({
        ...formData,[name]:value,
       });
  };

  const handleLanguageFrameworkChange=(e)=>{
       const {value} =e.target;
       let newLanguageFramework = [...formData.language_framework];
       if(newLanguageFramework.includes(value)){
        newLanguageFramework = newLanguageFramework.filter((obj)=>obj !== value);
       }else{
        newLanguageFramework.push(value);
       }
       setFormData((prevFromData)=>({
        ...prevFromData, language_framework : newLanguageFramework}));
  };


  const handleSubmit=(e)=>{
   e.preventDefault();
   const newErrors = validateForm(formData);
   setErrors(newErrors);
 
   if(Object.keys(newErrors).length === 0){
    alert(`Form values: 
      Username: ${formData.username}
      Email: ${formData.email}
      Age: ${formData.age}
      Occupation: ${formData.occupation}
      Site: ${formData.site}
      Language/Framework: ${formData.language_framework.join(', ')}
      Suggestion: ${formData.suggestion}`);
     console.log("form submitted sucessfully!");
     localStorage.setItem('formdata',JSON.stringify(formData));

     navigate('/OutPutPage');
     setFormDataContext(formData);
   }else{
    alert("please fill all the details");
    console.log(`Form  submission failed due to validation errors.`);
   }
    
  };

  const validateForm=(data)=>{
     const errors = {};

     if(!data.username.trim()){
      errors.username = 'username is requried';
     }

     if(!data.email.trim()){
      errors.email = 'Email is required';
     }else if(!/\S+@\S+\.\S+/.test(data.email)){
      errors.email = 'Email is invalid';
     }

     if(!data.age.trim()){
      errors.age = 'Age is required';
     }
     if(!data.occupation.trim()){
      errors.occupation = 'select the occupation';
     }

     if(!data.site.trim()){
      errors.site='select the recommed options';
     }
      if(data.language_framework.length === 0){
        errors.language_framework='select the languages and framework';
      }
      if(!data.suggestion.trim()){
        errors.suggestion=' comments or suggestion please..';
      }
  return errors;
  }

  return (
  <div id="main-ctn" >

      <form id="form-ctn" onSubmit={handleSubmit} >
      <img src={image} alt="top-image"/>

      <div className="form-input-ctn" >
      <label className={(!errors.username)? 'form-label':'form-label-error'}>
            Name
            <input 
            type="text"
            placeholder="Enter your name"
            name="username"
            value={formData.username}
            onChange={handleChange}
            />
        </label>
      </div>
     

      <div className="form-input-ctn" >
      <label className={(!errors.email)? 'form-label':'form-label-error'}>
            Email
            <input 
            type="text"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
          </label>
      </div>
        
      <div className="form-input-ctn" >
        <label className={(!errors.age)? 'form-label':'form-label-error'}>
          Age
          <input 
          type="number"
          placeholder="Enter your age"
          name='age'
          value={formData.age}
          onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-select-ctn" >
         <label className="form-select-label" >
          Which option best describes you?
          </label>
          <select className={(!errors.occupation?'form-select':'form-select-error')}  name="occupation" value={formData.occupation} onChange={handleChange}>
            <option>Select the option</option>
            <option value="Student" > Student</option>
            <option value="UX/UIDesigner">UX/UI Designer</option>
            <option value="fullStackDeveloper">Full Stack Developer</option>
            <option value="frontEndDeveloper">Front End Developer</option>
          </select>
          
      </div>

      <div className="form-radio-ctn">
        <label className="radio-ctn-label">
            Would you recommend our site to your friend?
        </label>
         <div className="from-radio-sub-ctn">
            <div className="form-radio-grp">
              <input
              type="radio"
              name="site"
              value="Yes"
              checked={formData.site === "Yes"}
              onChange={handleChange}
              />
              Yes
            </div>
            <div className="form-radio-grp">
              <input
              type="radio"
              name="site"
              value="No"
              checked={formData.site === "No"}
              onChange={handleChange}
              />
              No
            </div>
            <div className="form-radio-grp">
              <input
              type="radio"
              name="site"
              value="Maybe"
              checked={formData.site === "Maybe"}
              onChange={handleChange}
              />
              Maybe
            </div>
          </div>
        
        </div>

        <div className="form-radio-ctn2">
        <label className="radio-ctn2-label">
          Which Languages & frameworks you know?
          </label>
          <div className="from-radio-sub-ctn2">
          <div className="from-radio-grp2">
            <label>
              <input
              type="checkbox"
              name="language_framework"
              value="c"
              checked={formData.language_framework.includes('c')}
              onChange={handleLanguageFrameworkChange}
              />
              C
            </label>
          </div>
          <div className="from-radio-grp2"> 
          <label>
              <input
              type="checkbox"
              name="language_framework"
              value="cpp"
              checked={formData.language_framework.includes('cpp')}
              onChange={handleLanguageFrameworkChange}
              />
              C++
              </label>
           </div>
            <div className="from-radio-grp2">
            <label>
              <input
              type="checkbox"
              name="language_framework"
              value="Java"
              checked={formData.language_framework.includes('Java')}
              onChange={handleLanguageFrameworkChange}
              />
              Java
              </label>
            </div>
            <div className="from-radio-grp2">
            <label>
              <input
              type="checkbox"
              name="language_framework"
              value="Python"
              checked={formData.language_framework.includes('Python')}
              onChange={handleLanguageFrameworkChange}
              />
              Python
              </label>
            </div>
            <div className="from-radio-grp2">
            <label>
              <input
              type="checkbox"
              name="language_framework"
              value="javascript"
              checked={formData.language_framework.includes('javascript')}
              onChange={handleLanguageFrameworkChange}
              />
              JavaScript
              </label>
            </div>
            <div className="from-radio-grp2">
            <label>
              <input
              type="checkbox"
              name="language_framework"
              value="React"
              checked={formData.language_framework.includes('React')}
              onChange={handleLanguageFrameworkChange}
              />
              React
              </label>
            </div>
            <div className="from-radio-grp2">
            <label>
              <input
              type="checkbox"
              name="language_framework"
              value="Angular"
              checked={formData.language_framework.includes('Angular')}
              onChange={handleLanguageFrameworkChange}
              />
              Angular
              </label>
            </div>
            <div className="from-radio-grp2">
            <label>
              <input
              type="checkbox"
               name="language_framework"
               value="Django"
              checked={formData.language_framework.includes('Django')}
              onChange={handleLanguageFrameworkChange}
              />
              Django
              </label>
            </div>
            <div className="from-radio-grp2">
            <label>
              <input
              type="checkbox"
               name="language_framework"
              value="TailwindCSS"
              checked={formData.language_framework.includes('TailwindCSS')}
              onChange={handleLanguageFrameworkChange}
              />
              TailwindCSS
              </label>
            </div>
            <div className="from-radio-grp2">
               <label>
              <input
              type="checkbox"
               name="language_framework"
              value="bootstrap"
              checked={formData.language_framework.includes('bootstrap')}
              onChange={handleLanguageFrameworkChange}
              />
              Bootstrap
              </label>
            </div>  
            </div> 
        
        </div>
        <div className="form-comment-ctn">
          <label className="comment-ctn-label">
            Any comments or suggestions
          </label>
            <textarea className={(errors.suggestion)? 'comment-ctn-error':'comment-ctn-textarea'}
            placeholder="Type here..."
            rows={6}
            name="suggestion"
            value={formData.suggestion}
            onChange={handleChange}
            />
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>

  );
}

export default Registration;
