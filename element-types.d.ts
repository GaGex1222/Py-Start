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
    isLoading: boolean
    textStyles: string
    handlePress: () => void
    buttonStyles: string 
}