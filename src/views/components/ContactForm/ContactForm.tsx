import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import "./ContactForm.scss";

interface ContactFormValues {
    name: string;
    lastname: string;
    message: string;
    email: string;
}

const ContactFormSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
});

const ContactForm = () => {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                name: "",
                lastname: "",
                message: "",
                email: "",
            }}
            validationSchema={ContactFormSchema}
            onSubmit={(values: ContactFormValues) => {
                alert("Success");
                navigate("/");
            }}
        >
            {({ errors, touched }) => (
                <Form className="contact-form">
                    <div className="contact-form__input">
                        <InputField
                            name="name"
                            label="First name"
                            errorField={errors.name}
                            touchField={touched.name}
                        />
                    </div>

                    <div className="contact-form__input">
                        <InputField
                            name="lastname"
                            label="Last name"
                            errorField={errors.lastname}
                            touchField={touched.lastname}
                        />
                    </div>

                    <div className="contact-form__input">
                        <InputField
                            name="email"
                            label="Email"
                            errorField={errors.email}
                            touchField={touched.email}
                        />
                    </div>

                    <div className="contact-form__input">
                        <InputField
                            name="message"
                            label="Message"
                            errorField={errors.message}
                            touchField={touched.message}
                        />
                    </div>

                    <Button>Send</Button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
