import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreateNote() {
  const [content, setContent] = useState({
    title: "",
    content: "",
    date: new Date(),
    userSelected: "",
    users: [],
    _id: "",
  });
  const [editing, setEditing] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const URL_CREATENOTE = "https://api-notas-nxr9.onrender.com/api/notes"; 

  

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken")
    if (!token) {
      navigate("/")
      return
    } 
    const header = {'Content-Type': 'application/json'}; 
    const decoded = jwt_decode(token);
    console.log(decoded)
    const data = await axios.post(URL_CREATENOTE,{
    title:content.title,
    content:content.content, 
    date:content.date, 
    author:decoded._id},{header})

    if (data.status === 200) { 
      navigate("/Notes")
      
    }
   
  }

  const onInputChange = ({ target: { name, value } }) =>
    setContent({
      ...content,
      [name]: value,
    });

  const onChangeDate = (date) => setContent({ ...content, date });

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <h4>Create a Note</h4>
        <form onSubmit={onSubmit}>
          {}
          {}
          {}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              onChange={onInputChange}
              name="title"
              value={content.title}
              required
              autoFocus
            />
          </div>

          {}
          <div className="mb-3">
            <textarea
              type="text"
              className="form-control"
              placeholder="Content"
              name="content"
              onChange={onInputChange}
              value={content.content}
              required
            ></textarea>
          </div>
          {}
          <div className="form-group">
            <DatePicker
              className="form-control"
              selected={content.date}
              onChange={onChangeDate}
            />
          </div>
          <button className="btn btn-primary">
            Save <i className="material-icons">assignment</i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
