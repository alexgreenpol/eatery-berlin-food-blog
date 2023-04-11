import * as Yup from "yup";
import { Formik, Form } from "formik";
import InputField from "../InputField/InputField";
import "./SubscribeForm.scss";

interface SubscribeFormValues {
    email: string;
}

const SubscribeFormSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
});

const SubscribeForm = () => {
    const handleSubmit = (values: SubscribeFormValues) => {
        alert("Succesfully");
    };

    return (
        <Formik
            initialValues={{
                email: "",
            }}
            validationSchema={SubscribeFormSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form className="subscribe-form">
                    <div className="subscribe-form__content">
                        <h2 className="subscribe-form__title">
                            Can't get enough?
                        </h2>
                        <p className="subscribe-form__description">
                            Get some secret ingredients through our newsletter!
                        </p>
                    </div>
                    <div className="subscribe-form__form">
                        <div className="subscribe-form__input">
                            <InputField
                                name="email"
                                label="Email"
                                errorField={errors.email}
                                touchField={touched.email}
                            />
                        </div>

                        <button className="subscribe-form__btn" type="submit">
                            Subscribe
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default SubscribeForm;
