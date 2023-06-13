export interface UiStructure {
  isLoading: boolean;
  modal: UiFeedback;
  page: number;
}

export interface UiFeedback {
  isError: boolean;
  message: string;
  isVisible: boolean;
}
