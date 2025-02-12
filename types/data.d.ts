import { ImageSourcePropType } from "react-native";

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

export type UserData = {
    email: string;
    username: string
}

export type informationPageData = {
    infoParagraph: string
    title: string
    image: ImageSourcePropType
}

export type questionPageData = {
    title: string
    image: ImageSourcePropType
    options: [string, string, string, string]
    correctAnswerIndex: number
}


export type CourseData = {
    title: string;
    description: string;
    topicIcon: ImageSourcePropType
    informationPages: informationPageData[]
    questionPages: questionPageData[]
};
  