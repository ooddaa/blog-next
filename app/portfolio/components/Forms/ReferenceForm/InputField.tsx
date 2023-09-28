/**@jsxImportSource @emotion/react */
import React from "react";
import { CSSObject } from "./interfaces";
import { styles } from "./styles/styleSystem";

interface InputFieldProps {
  label?: string;
  type?: "text" | "date" | "email" | "password";
  styles?: { main?: CSSObject; label?: CSSObject; input?: CSSObject };
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  classNames?: {
    main?: string;
    label?: string;
    input?: string;
  };
  mainTestId?: string;
  labelTestId?: string;
  inputTestId?: string;
  classPrefix?: string;
}

const localStyles = {
  main: {
    display: "flex",
    "flex-direction": "column",
    marginBottom: styles.spacing[16],
  },
  label: {
    fontSize: styles.spacing[12],
    fontWeight: 400,
    color: styles.colors["dark-blue"],
    marginBottom: styles.spacing[4],
  },
  input: {
    height: styles.spacing[36],
    fontSize: styles.spacing[12],
    fontWeight: 400,
    backgroundColor: styles.colors["bg-primary"],
    border: "1px transparent solid",
    borderRadius: styles["border-radius"].primary,
    padding: "0 8px",
    marginBottom: styles.spacing[16],
    "&:focus": {
      border: `1px ${styles.colors["border-primary"]} solid`,
      outline: "none",
    },
  },
};

const defaultClassName = "input-field";

function InputField({
  label,
  type,
  styles,
  value,
  onChange,
  classNames,
  classPrefix,
  disabled = false,
  required = false,
  mainTestId,
  labelTestId,
  inputTestId,
}: InputFieldProps) {
  const mainClassNameStub = classNames?.main || defaultClassName;
  const lableClassNameStub = classNames?.label || defaultClassName;
  const inputClassNameStub = classNames?.input || defaultClassName;

  const mainClassNames = {
    className: classPrefix
      ? `${classPrefix}-${mainClassNameStub}__main`
      : `${mainClassNameStub}__main`,
    "test-id":
    mainTestId || 
      (classPrefix
        ? `__${classPrefix}-${mainClassNameStub}__main`
        : `__${mainClassNameStub}__main`),
  };
  const labelClassNames = {
    className: classPrefix
      ? `${classPrefix}-${lableClassNameStub}__label`
      : `${lableClassNameStub}__label`,
    "test-id": labelTestId || (classPrefix
      ? `__${classPrefix}-${lableClassNameStub}__label`
      : `__${lableClassNameStub}__label`),
  };

  const inputClassNames = {
    className: classPrefix
      ? `${classPrefix}-${inputClassNameStub}__input`
      : `${inputClassNameStub}__input`,
    "test-id":
    inputTestId || (classPrefix
        ? `__${classPrefix}-${inputClassNameStub}__input`
        : `__${inputClassNameStub}__input`),
  };

  return (
    <div {...mainClassNames} css={styles?.main || localStyles.main}>
      <label {...labelClassNames} css={styles?.label || localStyles.label}>
        {label || "Text Input Label"}
      </label>
      <input
        {...inputClassNames}
        type={type || "text"}
        css={styles?.input || localStyles.input}
        value={value || ""}
        onChange={(e) => onChange && onChange(e)}
        disabled={disabled}
        required={required}
      />
    </div>
  );
}

export default InputField;
