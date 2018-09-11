export const CheckoutValidation = (fields, errors, formIsValid) => {
	if(!fields["email"]){
       formIsValid = false;
       errors["email"] = "Email không được trống";
    }

    if(!fields["name"]){
       formIsValid = false;
       errors["name"] = "Họ Tên không được trống";
    }

    if(!fields["address"]){
       formIsValid = false;
       errors["address"] = "Đại Chỉ không được trống";
    }

    if(!fields["phone"]){
       formIsValid = false;
       errors["phone"] = "Số Điện Thoại không được trống";
    }

    if(typeof fields["email"] !== "undefined"){
       let lastAtPos = fields["email"].lastIndexOf('@');
       let lastDotPos = fields["email"].lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Định dạng email không đúng";
        }
   	}
    return {formIsValid: formIsValid, errors: errors};
}