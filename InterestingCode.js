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


  