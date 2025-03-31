import { TextInputProps } from '@/types/ui';
import styles from "./textInput.module.css";

const TextInput = ({ value, onChange, placeholder }: TextInputProps) => {
    return (
        <input
            className={styles.customInput}
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default TextInput;


