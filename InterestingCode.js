// Catch movement of browser buttons

window.onpopstate = function(){
    if((window.location.href).includes("/kyc"))
    history.push("/dashboard")
  };

//Validations

import validate from "validate.js";


const [validationErrors, setValidationErrors] = useState({
    company_name: "",
    AddressLine1: "",
  });
  
  const validationConstraints = {
    companyName: {
      companyName: {
        presence: { allowEmpty: false },
        format: { pattern: /^([a-zA-Z ])*$/ },
      }
    },
    AddressLine1: {
      AddressLine1: {
        presence: { allowEmpty: false },
      }
    }
  };
  
  useEffect(()=>{
    companyName()
  },[employmentInfo?.name_of_employer])
  
  useEffect(()=>{
    AddressLine1()
  },[employmentInfo?.employer_address_details?.address_line1])
  
  
  const companyName=()=>{
    if (validate({ companyName: employmentInfo?.name_of_employer }, validationConstraints?.companyName)) {
      setValidationErrors({ ...validationErrors, company_name: "Should be valid" })
      return false
    }
    else{
      setValidationErrors({ ...validationErrors, company_name: "" })
      return true
    } 
  }
  
  
  const AddressLine1=()=>{
    if (validate({ AddressLine1: employmentInfo?.employer_address_details?.address_line1 }, validationConstraints?.AddressLine1)) {
      setValidationErrors({ ...validationErrors, AddressLine1: "Should not be empty" })
      return false
    }
    else{
      setValidationErrors({ ...validationErrors, AddressLine1: "" })
      return true
    } 
  }
  
  //Pass state through history url

  history.push({pathname:'kyc', state:{ purchaseViaLoan: value ,  cartDetails: {cartDetails} }})


  //Web Cam

  import React, { useState, useRef } from "react";
import Webcam from "react-webcam";

function PhotoCapture(props) {
  const webcamRef = useRef(null);
  // const [imgSrc, setImgSrc] = useState(null);
  const [retake, setRetake] = useState(false);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    props.setImgSrc(imageSrc);
    setRetake(true)
  };

  return (
   <div className="catchaOverlay">
      <div className="captchaImage">
      <div className="close_popup" onClick={() => { props.setLivePhoto(!props.livePhoto) }}>
            <span className="close">x</span>
          </div>
      {!retake && (<Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        height={300}
        width={300}
      />)}

      {retake && (
        <img
          src={props.imgSrc}
        />
      )}
      <div className="webCamBtn">
        {retake ? (
          <button onClick={() => {
            setRetake(false)
          }}>ReCapture photo</button>
        ) : (
          <button onClick={capture}>Capture photo</button>
        )}
        {retake && <button onClick={props.handleWebCamPhoto} >Upload photo</button>}
      </div>

    </div>
   </div>
  )
}

export default PhotoCapture

const handleWebCamPhoto =(e) => {

  fetch(imgSrc)
    .then(res => res.blob())
    .then(res => {

      var file = new File([res], "image.jpg", {
        type: "image/jpeg",
      });

      var formData = new FormData();
      formData.append("Other", file);
      formData.append("document_name", "Other");
      console.log("formData", formData);
      dispatch(OrderActions.uploadDocuments(formData)).then((res) => {
        if (res && res.statusCode === 200) {
          OrderService.getDocuments().then((photoRes) => {
            setDocumentsIds({
              ...documentsIds,
              uploadPhotoId:
                photoRes.data &&
                photoRes.data.find((each) => each.document_type === "Other").id,
            });
            setPicName(file.name);
            console.log(res)
          });
        } else {
          setPicName(res);
        }
        // res&&res.statusCode===200?setPicName(e.target.files[0].name):setPicName(res)
      });
      setLivePhoto(false);
    });
  
};


  // Tabs 

  App.js

  import { useState } from "react";
import "./styles.css";
import Tab from "./Tab";
export default function App() {
  const [currentIndex, setIndex] = useState(0);

  const handleChange = (newIndex) => {
    setIndex(newIndex);
  };
  return (
    <div className="App">
      <Tab value={currentIndex} onChange={handleChange}>
        <Tab.Heads>
          <Tab.Item label={"Tab1"} index={0} />
          <Tab.Item label={"Tab2"} index={1} />
          <Tab.Item label={"Tab3"} index={2} />
        </Tab.Heads>
        <Tab.ContentWrapper>
          <Tab.Content index={0}>
            <h1>I am content 1</h1>
          </Tab.Content>
          <Tab.Content index={1}>
            <h1>I am content 2</h1>
          </Tab.Content>
          <Tab.Content index={2}>
            <h1>I am content 3</h1>
          </Tab.Content>
        </Tab.ContentWrapper>
      </Tab>
    </div>
  );
}


Tab.js

import { createContext, useContext } from "react";
import "./Tab.css";
const TabContext = createContext();

export default function Tab({ children, value, onChange }) {
  return (
    <div>
      <TabContext.Provider value={{ value, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
}
Tab.Heads = ({ children }) => {
  return <div className="heads">{children}</div>;
};

Tab.Item = ({ label, index, children }) => {
  const { value, onChange } = useContext(TabContext);
  const handleClick = () => {
    onChange(index);
  };
  return (
    <div
      onClick={handleClick}
      className={`item ${index === value ? "active" : null}`}
    >
      {label}
    </div>
  );
};

Tab.ContentWrapper = ({ children }) => {
  return <div className="contentWraper">{children}</div>;
};

Tab.Content = ({ children, index }) => {
  const { value } = useContext(TabContext);
  return value === index ? <div>{children}</div> : null;
};

Tab.css 

.heads {
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.item {
  background-color: red;
  color: white;
  padding: 10px;
  width: 100%;
  cursor: pointer;
}

.item.active {
  background-color: brown;
}

.contentWraper {
  background-color: grey;
  margin: 0;
  padding: 10px;
}
