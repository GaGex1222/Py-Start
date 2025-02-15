import { ImageSourcePropType } from "react-native";

export type MotiElementProps = {
    className?: string;
    animationDelay: number
    children: React.ReactNode; 
};

export type InfoSectionProps = {
    text: string;
    animationDelay: number
}

export type CustomButtonProps = {
    text: string
    isLoading?: boolean
    handlePress: () => void
    buttonStyles?: string
    Icon?: ReactElement
}

export type InputFieldProps = {
    animationDelay: number
    onTextChange: React.Dispatch<React.SetStateAction<string>>;
    isPassword?: boolean
    label: string
}