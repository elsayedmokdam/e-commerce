/**
 * @description Props for AppSelectOption component
 */
export interface AppSelectOptionsProps {
  /**
   * @description The label of the option
   */
  label?: string;
  /**
   * @description The placeholder of the select
   */
  placeholder?: string;
  /**
   * @description Array of options
   */
  values: [
    {
      /**
       * @description The value of the option
       */
      value: string;
      /**
       * @description The label of the option
       */
      label: string;
    },
  ];
}
