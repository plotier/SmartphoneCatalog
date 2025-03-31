export interface IconProps {
    name: string;
    width?: number;
    height?: number;
    className?: string;
}

export interface TextInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
  }

  export interface ButtonProps {
    deactivated?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
  }