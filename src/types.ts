export interface QuestionField {
    element: string;
    type: string;
    placeholder?: string;
    options?: { label: string; value: string }[];
}

export interface Option {
    label: string;
    value: string;
}