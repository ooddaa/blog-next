/** @jsxImportSource @emotion/react */
import { useState } from "react";
import './CustomSelect.module.css'
import {styles} from "../Forms/ReferenceForm/styles/styleSystem"
import { CustomSelectProps, Option } from '../Forms/ReferenceForm/interfaces'

const defaultStyles = {
  control: {
    height: styles.spacing[36],
    borderRadius: styles["border-radius"].xlarge, // 8px
    border: `1px solid ${styles.colors["border-primary"]}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "flex-direction": "row",
  },
  body: {
    height: "100%",
    width: "400px",
    backgroundColor: "white",
    borderRadius: `${styles["border-radius"].xlarge} 0 0 ${styles["border-radius"].xlarge}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: `0 0 0 ${styles.spacing[16]}`,
    color: styles.colors["text-primary"],
    fontSize: styles.spacing[12],
  },
  arrow: {
    height: "100%",
    width: styles.spacing[48],
    backgroundColor: "white",
    borderRadius: `0 ${styles["border-radius"].xlarge} ${styles["border-radius"].xlarge} 0`,
    borderLeft: `1px solid ${styles.colors["border-primary"]}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  optionsList: {
    width: "300px",
    backgroundColor: "white",
    border: `1px solid ${styles.colors["border-primary"]}`,
    borderRadius: `${styles["border-radius"].xlarge}`,
    "& div:first-of-type": {
      borderRadius: `${styles["border-radius"].xlarge} ${styles["border-radius"].xlarge} 0 0`,
    },
    "& div:last-child": {
      borderRadius: `0 0 ${styles["border-radius"].xlarge} ${styles["border-radius"].xlarge}`,
    },
  },
  option: {
    width: "100%",
    height: styles.spacing[36],
    padding: `0 ${styles.spacing[16]}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: styles.colors["text-primary"],
    fontSize: styles.spacing[12],
    "&:hover": {
      backgroundColor: styles.colors["bg-primary"],
    },
  },
  chevron: {
    height: "20px",
    width: "20px",
    margin: "0 auto",
    color: "grey",
    "&:hover": {
      color: "#111"
    }
  }
};

function CustomSelect({ options, value, onChange, disabled, styles, testId }: CustomSelectProps) {
  const [isOpen, toggleOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(value || "Custom select")

  return (
    <div className="custom-select">
      <div className="custom-select--control" test-id="__custom-select--control" 
      css={styles ? styles.control : defaultStyles.control}
      onClick={() => !disabled && toggleOpen((x) => !x)}
      >
        <div className="custom-select--control-body" test-id={testId || "__custom-select--control-body"} css={styles ? styles.body : defaultStyles.body}>
          {currentValue}
        </div>
        <div
          className="custom-select--control-arrow"
          css={styles ? styles.arrow : defaultStyles.arrow}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chevron chevron-close"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
              css={defaultStyles.chevron}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="chevron chevron-down"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
              css={defaultStyles.chevron}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </div>
      </div>
      {isOpen && options && (
        <div 
          className="custom-select--options-list" 
          test-id="__custom-select--options-list"
          css={styles ? styles.optionsList : defaultStyles.optionsList}
        >
          {options.map((option: Option, i: number) => {
            return (
              <div 
                key={i}
                className={`custom-select--option option--${i}`}
                test-id={`__option--${i}`}
                onClick={() => {
                  setCurrentValue(option.value)
                  onChange && onChange({ target: { type: 'select', value: option.value }})
                  toggleOpen(x => !x)
                }}
                css={styles ? styles.option : defaultStyles.option}
              >
                {option.value}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
export const customSelect = { component: CustomSelect, description: (<div>Custom Select component.</div>)}
