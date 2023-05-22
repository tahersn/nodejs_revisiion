const yup = require ("yup");

const user= require ("../models/userModel")

async function validateAttributes(req,res,next){
    try{const schema = yup.object().shape({
        name : yup.string().required("name is required").min(2,"name must be 2 or more caracters"),
        email : yup.string().email().required("email is required").matches(/^[a-zA-Z0-9]+@esprit.tn$/, "email must end with @esprit.tn"),
        cin:yup.string().required("cin is required").length(8,"cin must be 8 caracters"),



    });
    await schema.validate(req.body);
    next();}catch(error){
        console.log(error);
        res.send(error.message)
    }

}
//validate email is in the correct format and ends with @esprit.tn
// async function validateEmail(req,res){
//     try{const schema = yup.object().shape({
//         email : yup.string().email().required("email is required").matches(/^[a-zA-Z0-9]+@esprit.tn$/, "email must end with @esprit.tn")
//     });
//     await schema.validate(req.body);
//     next();}catch(error){
//         console.log(error);
//         res.send(error.message)
//     }

// }



/*
String Validation:
Minimum length: yup.string().min(6, "String must have at least 6 characters")
Maximum length: yup.string().max(20, "String cannot exceed 20 characters")
Exact length: yup.string().length(10, "String must have exactly 10 characters")
Regex pattern: yup.string().matches(/^[a-zA-Z0-9]+$/, "String must contain only alphanumeric characters")
Inclusion of specific values: yup.string().oneOf(["apple", "banana", "orange"], "Invalid fruit name")
Number Validation:

Minimum value: yup.number().min(0, "Number must be greater than or equal to 0")
Maximum value: yup.number().max(100, "Number must be less than or equal to 100")
Integer only: yup.number().integer("Number must be an integer")
Positive number: yup.number().positive("Number must be positive")
Negative number: yup.number().negative("Number must be negative")
Boolean Validation:

Required boolean value: yup.boolean().required("Boolean value is required")
Date Validation:

Minimum date: yup.date().min(new Date(), "Date must be in the future")
Maximum date: yup.date().max(new Date(2023, 0, 1), "Date cannot exceed January 1, 2023")
Array Validation:

Minimum length: yup.array().min(3, "Array must have at least 3 elements")
Maximum length: yup.array().max(10, "Array cannot exceed 10 elements")
Exact length: yup.array().length(5, "Array must have exactly 5 elements")
Type validation for array elements: yup.array().of(yup.number().required("Array element must be a number"))

*/

module.exports = {
    validateAttributes
}