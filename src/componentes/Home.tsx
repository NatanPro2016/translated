import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LanguageInput from './LanguageInput'
import LanguageOutput from './LanguageOutput'

export const Home = () => {
  const [text , setText] = useState('')
  const [inputLang , setInputLang] = useState('si')
  const [outputLang , setOutputLang] = useState('en')
  const [response , setResponse] = useState('')
  const [isLoading , setIsLoading]= useState(false)
  useEffect(()=>{
        if(  text && inputLang && outputLang){
          
          setIsLoading(true)
          axios({ url:'https://api.mymemory.translated.net/',
              method:"GET",
              params:{
                q: text,
                langpair:`${inputLang}|${outputLang}`
              }
            })
            .then(data => {
              setResponse(data.data.responseData.translatedText)
              setIsLoading(false)
            })
            .catch(e =>{
              console.log(e)
              setIsLoading(false)
            })
        }
  }, [text, inputLang, outputLang])
  return (
    <div className='min-w-svw min-h-svh bg-no-repeat bg-center bg-cover bg-[url("/hero_img.jpg")] relative font-DM_sans '>
    <div className="h-full w-full absolute z-[0] bg-gradient-to-t from-black to-transparent"></div>    
        <div className="flex w-full h-48 items-center justify-center">
            <img src="/logo.svg" alt="" className=''/>
        </div>
        <div className="flex lg:justify-center gap-4 flex-col lg:flex-row items-center">
            <LanguageInput setInputLang={setInputLang} inputLang={inputLang} text={text} setText={setText} />
            <LanguageOutput outputLang={outputLang} setOutputLang={setOutputLang} response={response} isLoading={isLoading}/>
        </div>
    </div>
  )
}
