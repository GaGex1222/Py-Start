import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { CourseMainPage } from "@/components/coursePage/MainPage";
import { useState } from "react";
import { coursesData } from "@/courseData";
import { CourseData } from "@/types/data";
import InformationPage from "@/components/coursePage/InformationPage";
export default function CourseDetails() {
  const { courseName }: { courseName: string } = useLocalSearchParams();
  const [showInfoPages, setShowInfoPages] = useState(false);
  const [showQuestionPages, setShowQuestionPages] = useState(false);
  const course: CourseData | undefined = coursesData.find((item) => item.title == courseName);

  return (
    <>
      {showInfoPages && (
        <InformationPage course={course} setShowInfoPages={setShowInfoPages} setShowQuestionPages={setShowQuestionPages}/>
      )}
      {showQuestionPages && (
        <View>
          <Text>Question</Text>
        </View>
      )}
      {!showInfoPages && !showQuestionPages && (
        <CourseMainPage courseName={courseName} setShowInfoPages={setShowInfoPages} courseData={course} />
      )}

    </>
  );
  

}
