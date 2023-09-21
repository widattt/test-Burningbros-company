import React from "react";

interface ButtonGroupProps {
  type: "Opened" | "Closed";
  state: "Enabled" | "Hovered" | "Pressed";
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ type, state }) => {
  const getVariantClass = (): string => {
    const typeClass = type.toLowerCase();
    const stateClass = state.toLowerCase();
    return `button-group bg-neutral-8 rounded-lg p-2 flex items-center gap-2 ${
      stateClass === "hovered" || stateClass === "pressed"
        ? `button-group--state-${stateClass}--type-${typeClass}`
        : ""
    }`;
  };

  return (
    <div className={getVariantClass()}>
      <svg
        className="ic-chevron-24"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.64645 7.64645C9.84171 7.45118 10.1583 7.45118 10.3536 7.64645L14.3536 11.6464C14.5488 11.8417 14.5488 12.1583 14.3536 12.3536L10.3536 16.3536C10.1583 16.5488 9.84171 16.5488 9.64645 16.3536C9.45118 16.1583 9.45118 15.8417 9.64645 15.6464L13.2929 12L9.64645 8.35355C9.45118 8.15829 9.45118 7.84171 9.64645 7.64645Z"
          fill="#B1B8C0"
        />
      </svg>

      <div className="product-list text-text-0 font-pretendard-headline-3">Product List</div>
    </div>
  );
};

export default ButtonGroup;
