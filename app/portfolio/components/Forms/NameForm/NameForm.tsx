/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, FormEvent, useState } from "react";
import { styles, formStyles } from "../../themes/light";
import CustomSelect from "../../CustomSelect/CustomSelect";

const maxWidth = 450;
const minWidth = 350;
const minHeight = 200;

const localStyles = {
  topMargin: {
    marginTop: styles.spacing[32],
  },
  main: {
    maxWidth: `${maxWidth}px`,
    minWidth: `${minWidth}px`,
    [styles.mq[600]]: {
      minWidth: `400px`,
    },
    minHeight: `${minHeight}px`,
    backgroundColor: `${styles.colors.white}`,
    borderRadius: "9px",
    border: `1px solid ${styles.colors["border-primary"]}`,
    padding: "24px",
    boxShadow: `0 0 10px ${styles.colors["border-primary"]}`,
  },
  title: {
    padding: `${styles.spacing[8]} ${styles.spacing[16]} ${styles.spacing[16]} ${styles.spacing[16]}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const selectStyles = {
  control: {
    height: styles.spacing[36],
    borderRadius: styles["border-radius"].primary,
    border: `1px solid ${styles.colors["border-primary"]}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "flex-direction": "row",
  },
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "9px 0 0 9px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0 0 0 18px",
    color: styles.colors["text-primary"],
  },
  arrow: {
    height: "100%",
    width: "50px",
    backgroundColor: "white",
    borderRadius: "0 9px 9px 0",
    borderLeft: `1px solid ${styles.colors["border-primary"]}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  optionsList: {
    width: '400px',
    backgroundColor: 'white',
    border: `1px solid ${styles.colors["border-primary"]}`,
    borderRadius: '9px',
    "& div:first-of-type": {
      borderRadius: '9px 9px 0 0',
    },
    "& div:last-child": {
      borderRadius: '0 0 9px 9px',
    },
  },
  option: {
    width: "398px",
    height: styles.spacing[36],
    padding: '0 18px',
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: styles.colors["text-primary"],
    "&:hover": {
      backgroundColor: styles.colors["grey-light"],
    }
  },
};

const selectProps = {
  options: [{ value: "a" }, { value: "b" }, { value: "Tool" }],
  // value: "Select an option",
  // onChange: (value: string) => console.log("passed upstairs", value),
};

function NameForm() {
  const name = useFormInput("", {
    msg: "Please insert a name.",
    validationFn: (val) => val.length >= 3,
  });
  const dob = useFormInput("", { msg: "Please insert a date of birth." });
  const addr = useFormInput("", { msg: "Please insert an address." });
  const postcode = useFormInput("", { msg: "Please insert a postcode." });
  const music = useFormInput("Select an option", { msg: "Please choose your favourite band." });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    /* submit if everything is validated */
    if (
      name.validation.isValidated &&
      dob.validation.isValidated &&
      addr.validation.isValidated &&
      postcode.validation.isValidated &&
      music.validation.isValidated
    ) {
      /* submission action - API call */
      console.log(
        "all ok, sending data:",
        [name, dob, addr, postcode, music].map(({ control }) => control.value)
      );
      setSubmitted(true);
    } else {
      const invalidInputs = {
        name: [name.control.value, name.validation.isValidated],
        dob: [dob.control.value, dob.validation.isValidated],
        addr: [addr.control.value, addr.validation.isValidated],
        postcode: [postcode.control.value, postcode.validation.isValidated],
        music: [music.control.value, music.validation.isValidated],
      };
      console.log("something wrong, invalid inputs:", invalidInputs);
    }
  };

  return (
    <div css={localStyles.topMargin}>
      <main
        className="personal-form"
        test-id="__personal-form"
        css={localStyles.main}
      >
        <div className="title" css={localStyles.title}>
          Name and address
        </div>
        <form action="submit" onSubmit={handleSubmit}>
          
          <div
            className="personal-form--name"
            test-id="__personal-form--name"
            css={formStyles.general}
          >
            <label css={formStyles.label}>Name:</label>
            <input
              type="text"
              name="name"
              {...name.control}
              css={formStyles.inputField}
              required
              disabled={submitted}
            />
          </div>

          <div
            className="personal-form--dob"
            test-id="__personal-form--dob"
            css={formStyles.general}
          >
            <label css={formStyles.label}>Date of birth:</label>
            <input
              type="date"
              name="dob"
              {...dob.control}
              css={formStyles.inputField}
              required
              disabled={submitted}
            />
          </div>

          <Divider
            margins={{ top: styles.spacing[36], bottom: styles.spacing[24] }}
          ></Divider>

          <div
            className="personal-form--addr"
            css={{
              display: "grid",
              "grid-template-columns": "1fr",
              "justify-content": "space-between",
              gap: "1rem",
              [styles.mq[600]]: {
                minWidth: `400px`,
                "grid-template-columns": "1fr 100px",
              },
            }}
          >
            <div
              className="personal-form--addr-main"
              test-id="__personal-form--addr-main"
              css={formStyles.general}
            >
              <label css={formStyles.label}>Address:</label>
              <input
                type="text"
                name="addr"
                {...addr.control}
                css={formStyles.inputField}
                required
                disabled={submitted}
              />
            </div>

            <div
              className="personal-form--addr-postcode"
              test-id="__personal-form--addr-postcode"
              css={formStyles.general}
            >
              <label css={formStyles.label}>Postcode:</label>
              <input
                type="text"
                name="postcode"
                {...postcode.control}
                css={formStyles.inputField}
                required
                disabled={submitted}
              />
            </div>
          </div>

          <Divider margins={{ top: "0px" }}></Divider>

          {/* SELECT */}

          <CustomSelect
            {...{
              ...selectProps,
              ...music.control,
              styles: selectStyles,
              disabled: submitted,
            }}
          />

          <Divider/>

          {/* Submittion Button */}

          {submitted ? (
            <button
              className="personal-form--submitBtn"
              test-id="__personal-form--submitBtn"
              type="submit"
              css={formStyles.submitBtnSuccess}
              disabled
            >
              Thank you!
            </button>
          ) : (
            <button
              className="personal-form--submitBtn"
              test-id="__personal-form--submitBtn"
              type="submit"
              css={formStyles.submitBtn}
            >
              Submit
            </button>
          )}
        </form>
      </main>

      {submitted && (
        <div className="success" test-id="__success">
          {[name, dob, addr, postcode, music]
            .map(({ control }) => control.value)
            .join(" ")}
        </div>
      )}
    </div>
  );
}

export const nameForm = { component: <NameForm />, description: (<div>A form inspired by TailwindCSS style.</div>)};

type Style = {
  [Property in keyof typeof styles]?: {
    [key: string]: string | number | Object;
  };
};
interface DividerProps {
  margins?: { top?: string; bottom?: string };
}

function Divider({ margins }: DividerProps) {
  return (
    <div
      className="Divider"
      css={{
        maxWidth: `${localStyles.main.maxWidth}px`,
        height: "1px",
        backgroundColor: styles.colors["border-primary"],
        marginTop: margins?.top || styles.spacing[24],
        marginBottom: margins?.bottom || styles.spacing[24],
      }}
    ></div>
  );
}

interface ValidationConfig {
  msg?: string;
  validationFn?: (val: string) => boolean;
}

export interface UseFormInput {
  (
    initialValue: string,
    validationConfig?: ValidationConfig
  ): UseFormInputResult;
}

export interface UseFormInputResult {
  control: {
    value: string;
    onChange: (
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
    ) => void;
  };
  validation: {
    isValidated: boolean;
    validationMsg?: string;
    // keyof ValidationConfig,
    hasPassedValidation: () => void;
  };
}
/**
 * I want to validate input eagerly and not wait until user clicks Submit to find out of
 * all the validation errors. I want user to be able to learn about the requirements for each
 * input field as they type.
 *
 * @param initialValue
 * @param validationConfig
 * @returns
 */
export function useFormInput(
  initialValue: string,
  validationConfig?: ValidationConfig
) {
  const [value, setValidatedValue] = useState<string>(initialValue);
  const [validationMsg, setValidationMsg] = useState<string>(
    validationConfig?.msg || ""
  );

  const [isValidated, setIsValidated] = useState<boolean>(false);

  function handleChangeValue(
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | { target: { type: string; value: string } }
  ) {
    /* I'd rather validate here, because it's less frustrating for user to see error immediately */
    if (e.target.type === "text") {
      // console.log('e.target.type === text')
      if (
        validationConfig &&
        typeof validationConfig.validationFn === "function"
      ) {
        setIsValidated(validationConfig.validationFn(e.target.value));
      } else {
        /* users provided no validation function, means they don't care */
        setIsValidated(true);
      }
    } else {
      /* all non-text - date & selects are non validated */
      setIsValidated(true);
    }

    setValidatedValue(e.target.value);
  }

  function handleValueSubmit(value: string) {
    return function inner(e: FormEvent<HTMLInputElement>) {
      e.preventDefault();
    };
  }

  return {
    control: {
      value,
      onChange: handleChangeValue,
    },
    validation: {
      isValidated,
      validationMsg,
      ...validationConfig,
      hasPassedValidation() {
        this.isValidated = true;
      },
    },
  };
}
