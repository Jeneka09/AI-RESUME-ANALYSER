import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ATSScore from '../components/ATSScore'
import ResumePreview from '../components/ResumePreview'
import Skills from '../components/Skills'
import Suggestions from '../components/Suggestions'
import UploadResume from '../components/UploadResume'

const Home = () => {
  const [analysis, setAnalysis] = useState(null);

  return (
    <div>
      <Navbar/>
      <div className="container">
        <UploadResume onAnalyze={setAnalysis} />
        <ATSScore analysis={analysis} />
        <ResumePreview analysis={analysis} />
        <Skills analysis={analysis} />
        <Suggestions analysis={analysis} />
      </div>
    </div>
  )
}

export default Home
