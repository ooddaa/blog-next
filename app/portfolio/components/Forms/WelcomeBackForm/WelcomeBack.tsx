/** @jsxImportSource @emotion/react */
import { ChangeEvent, MouseEvent, FormEvent, ChangeEventHandler, useRef, useState } from "react";
import { styles, formStyles } from "../../themes/light";
import { WebLink } from "@/app/toolbox";

const localStyles = {
  main: {
    width: "340px",
    minHeight: "200px",
    backgroundColor: `${styles.colors.white}`,
    borderRadius: "9px",
    border: `1px solid ${styles.colors["border-primary"]}`,
    padding: `${styles.spacing[16]} ${styles.spacing[32]}`,
    boxShadow: `0 0 10px ${styles.colors["border-primary"]}`,
  },
  text: {
    color: `${styles.colors.grey[4]}`,
  },
  title: {
    color: `${styles.colors.grey[4]}`,
    fontSize: `${styles.fontSizes["title-sm"]}`,
    padding: `${styles.spacing[12]} ${styles.spacing[24]} ${styles.spacing[24]} ${styles.spacing[24]}`,
    display: "flex",
    justifyContent: "center",
  },
  inputField: {
    ...formStyles.inputField,
    backgroundColor: styles.colors["grey-light"],
    border: `1px solid ${styles.colors["bg-primary"]}`,
    borderRadius: styles["border-radius"].large,
  },
  label: {
    ...formStyles.label,
    fontWeight: 500,
    color: `${styles.colors.grey[4]}`,
    // color: `red`,

  }
};

const openEye = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke={styles.colors["bg-primary"]}
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

interface WelcomeBackProps {
  title: string;
}

function WelcomeBack({ title }: WelcomeBackProps) {
  const { value: username } = useTextInput("");
  const { value: password } = useTextInput("");

  const checkboxRef = useRef<HTMLDivElement>(null);
  const [checkboxChecked, toggleCheckbox] = useState(false);

  function handleCheckbox(e: MouseEvent) {
    if (checkboxRef && checkboxRef.current && checkboxRef.current.style) {
      toggleCheckbox(!checkboxChecked)
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(username.value, password.value)
  }

  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <div className="welcome-back" css={localStyles.main}>
        <div className="welcome-back-title" css={localStyles.title}>
          {title}
        </div>
        <form className="welcome-back-form" action="submit" onSubmit={handleSubmit}>
          <div
            className="welcome-back-username"
            test-id="__welcome-back-username"
            css={formStyles.general}
          >
            <label
              css={localStyles.label}
            >
              Username
            </label>
            <input 
            type="text" 
            {...username} 
            css={localStyles.inputField} />
          </div>

          <div
            className="welcome-back-password"
            test-id="__welcome-back-password"
            css={{
              ...formStyles.general,
              marginBottom: styles.spacing[16],
            }}
          >
            <label css={localStyles.label}>
              Password
            </label>
              <input 
                css={localStyles.inputField} 
                type="password" 
                {...password} 
                />
          </div>

          <div
            className="welcome-back-checkbox--container"
            css={{
              ...styles.utils.flexRow,
              ...styles.utils.align,
              gap: `${styles.spacing[8]}`,
              paddingBottom: styles.spacing[16],
            }}
          >
            <div
              ref={checkboxRef}
              className="welcome-back-checkbox"
              test-id="__welcome-back-checkbox"
              css={{
                ...localStyles.inputField,
                height: '16px',
                width: "16px",
                margin: 0,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                "&:hover": {
                  transform: "scale(1.1)"
                },
              }}
              onClick={handleCheckbox}
            > {checkboxChecked && <div 
            className="welcome-back-checkbox-inner"
            css={{
              backgroundColor: styles.colors["teal-blue"],
              borderRadius: "25%",
              height: "12px",
              width: "12px",
              margin: 0,
              padding: 0,
            }}
            ></div> }
            </div>

            <div
              className="welcome-back-checkbox--remember"
              css={localStyles.label}
            >
              Remember me
            </div>

            <a
              href="/welcomebackform"
              className="welcome-back-checkbox--forgot"
              css={{
                ...localStyles.label,
                fontWeight: 600,
                marginLeft: "auto",
                textDecoration: "none",
                color: styles.colors.grey[2]
              }}
            >
              Forgot your password?
            </a>
          </div>

          <button
            className="submitBtn"
            test-id="__submitBtn"
            type="submit"
            css={{
              ...formStyles.submitBtn,
              height: styles.spacing[36],
              backgroundColor: styles.colors["teal-blue"],
              marginBottom: styles.spacing[16],
              borderRadius: styles["border-radius"].large,
              "&:hover": {
                backgroundColor: styles.colors["teal-blue-hover"]
              }
            }}
          >
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}

const defaultWelcomeBack = () => WelcomeBack({ title: "Welcome Back!" });
const DefaultWelcomeBack = () => WelcomeBack({ title: "Welcome Back!" });

export default defaultWelcomeBack;
export const welcomeBack = {component: < DefaultWelcomeBack />, description: (<div>Login form from the great <WebLink href="https://www.refactoringui.com/" alt="link to Refactoring UI">Refactoring UI book.</WebLink></div>)}

function useTextInput(initValue: string): { value: { value: string, onChange: ChangeEventHandler<HTMLInputElement> } }  {
  const [value, setValue] = useState(initValue)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return {
    value: {
      value,
      onChange: handleChange
    }, 
  }
}
