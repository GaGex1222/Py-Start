import { ImageSourcePropType } from "react-native";

export type UserData = {
    email: string;
    username: string
}

export type iconTypes = {
    profile: ImageSourcePropType;
    home: ImageSourcePropType;
    courses: ImageSourcePropType;
    hacker: ImageSourcePropType;
    logo: ImageSourcePropType;
    logoWithText: ImageSourcePropType;
    googleLogo: ImageSourcePropType;
    rightArrow: ImageSourcePropType;
    pythonLogo: ImageSourcePropType;
    functions: ImageSourcePropType;
    variables: ImageSourcePropType;
    dictionaries: ImageSourcePropType;
    loops: ImageSourcePropType;
    inputs: ImageSourcePropType;
    arrays: ImageSourcePropType;
    libraries: ImageSourcePropType;
}

export type coursesData = {
    title: string;
    description: string;
};
  