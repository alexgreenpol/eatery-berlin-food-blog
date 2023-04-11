import { Field } from "formik";
import { FC } from "react";
import cn from "classnames";

type InputFieldProps = {
    errorField?: string;
    touchField?: boolean;
    label: string;
    name: string;
    className?: string;
};

const InputField: FC<InputFieldProps> = ({
    name,
    label,
    errorField,
    touchField,
    className,
}) => {
    return (
        <div className="input-holder">
            <label htmlFor={name}>{label}</label>
            <Field
                name={name}
                className={cn("input-field", {
                    invalid: errorField && touchField,
                    className,
                })}
            />
            {errorField && touchField ? (
                <span className="error">{errorField}</span>
            ) : null}
        </div>
    );
};

export default InputField;
