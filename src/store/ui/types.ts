export interface UiStructure {
  isLoading: boolean;
  modal: UiFeedback;
}

export interface UiFeedback {
  isError: boolean;
  message: string;
  isVisible: boolean;
}
