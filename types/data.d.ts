import { ImageSourcePropType } from "react-native";

type Setter<T> = React.Dispatch<React.SetStateAction<T>>;

export type UserCoursesData = {
     [courseTitle: string]: number 
}

export type informationPageData = {
    infoParagraph: string
    title: string
    image: ImageSourcePropType
}


export type questionPageData = {
    title: string
    image: ImageSourcePropType | undefined
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
  