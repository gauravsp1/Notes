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

  