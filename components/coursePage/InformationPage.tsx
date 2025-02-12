import { View, Image, ScrollView } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'
import BackButton from '../BackButton'
import { CourseData, Setter } from '@/types/data'
import { MotiTextConfigured, MotiViewConfigured } from '../MotiElementsConfigured'
import { images } from '@/constants/icons'
import { RightArrowIcon } from '../icons/Arrow'
import CustomButton from '../CustomButton'
import { useRouter } from 'expo-router'
type InformationPageProps = {
  course: CourseData | undefined
  setShowInfoPages: Setter<boolean>;
  setShowQuestionPages: Setter<boolean>;
}

const InformationPage: React.FC<InformationPageProps> = ({course, setShowInfoPages, setShowQuestionPages}) => {
    const [pageIndex, setPageIndex] = useState(0);
    const router = useRouter()

    const handleBackButton = () => {
      if (pageIndex > 0){
        setPageIndex(pageIndex - 1)
      } else {
        router.push({pathname: "/courseDetails/[courseName]", params: {courseName: course?.title as string}})
      }
    }

    const handleNextButton = () => {
      if (pageIndex + 1 == course?.informationPages.length){
        setShowInfoPages(false)
        setShowQuestionPages(true)
      } else {
        console.log("GSGSGG")
        setPageIndex(pageIndex + 1)
      }
    }

    return (
    <View className="flex-1 p-7 justify-center items-center">
      <BackButton handlePress={handleBackButton}/>
      <MotiTextConfigured
      
      animationDelay={0}
      className="text-3xl font-pbold text-center text-primary"
      >
      {course?.informationPages[pageIndex].title}
      </MotiTextConfigured>

      <MotiViewConfigured animationDelay={100}>
        <Image 
          source={course?.informationPages[pageIndex].image} 
          className="w-96 h-80" 
          style={{ resizeMode: 'contain' }} 
        />
      </MotiViewConfigured>

      <ScrollView contentContainerStyle={{  }}>
        <MotiTextConfigured
          animationDelay={200}
          className="text-lg font-pmedium w-80  text-gray-700 mb-6 text-center leading-relaxed"
        >
          {course?.informationPages[pageIndex].infoParagraph}
        </MotiTextConfigured>
      </ScrollView>

      <MotiViewConfigured
      animationDelay={300}
      className="flex-1 justify-end p-10 items-center"
      >
      <CustomButton
          text="Continue"
          Icon={RightArrowIcon}
          handlePress={handleNextButton}
          buttonStyles="py-3 mt-10 px-6"
      />
      </MotiViewConfigured>
  </View>
  )
}


export default InformationPage