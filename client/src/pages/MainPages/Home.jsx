import React from 'react'
import SectionGradient from '../../components/MainPageSections/SectionGradient/SectionGradient'
import SectionEnjoy from '../../components/MainPageSections/SectionEnjoy/SectionEnjoy'
import SectionDownload from '../../components/MainPageSections/SectionDownload/SectionDownload'
import SectionWatch from '../../components/MainPageSections/SectionWatch/SectionWatch'
import SectionKids from '../../components/MainPageSections/SectionKids/SectionKids'
import SectionQuestions from '../../components/MainPageSections/SectionQuestions/SectionQuestions'

function Home() {
  return (
<>
<SectionGradient></SectionGradient>
<SectionEnjoy></SectionEnjoy>
<SectionDownload></SectionDownload>
<SectionWatch></SectionWatch>
<SectionKids></SectionKids>
<SectionQuestions></SectionQuestions>
</>
  )
}

export default Home