import React from 'react'


type params = {
  text:string,
  setText: (text:string) =>void
  inputLang: string,
  setInputLang: (text:string)=> void
}
const LanguageInput = ({text, setText , inputLang , setInputLang }:params) => {
    const handleCopy = ()=>{
      navigator.clipboard.writeText(text)
    }
    const langues =[
    ['am', 'Amharic'],
    ['sq-AL', 'Albanian'],
    ['af', 'Afrikaans'],
    ['ar-SA', 'Arabic'],
    ['hy-AM', 'Armenian'],
    ['az-AZ', 'Azerbaijani'],
    ['bjs-BB', 'Bajan'],
    ['eu-ES', 'Basque'],
    ['bem-ZM', 'Bemba'],
    ['cop-EG', 'Coptic'],
     ['zh-cn', 'china'],
    ['hr-HR', 'Croatian'],
    ['dz-BT', 'Dzongkha'],
    ['eo-EU', 'Esperanto'],
    ['haw-US', 'Hawaiian'],
    ['he-IL', 'Hebrew'],
    ['it-IT', 'Italian'],
    ['ja-JP', 'Japanese'],
    ['kk-KZ', 'Kazakh'],
    ['km-KM', 'Khmer'],
    ['lo-LA', 'Lao'],
    ['es', 'Spanish'],
  ]
  return (
    <div className='w-5/6 sm:w-[470px] h-[290px] bg-[#212936cc] rounded-2xl border border-[#4D5562] text-[#e5e6e9] p-3 backdrop-blur'>
     <div className="h-full w-full flex flex-col "> 
      <div className="flex items-center text-[#4D5562] w-full gap-2 p-2 pb-4 border-b border-[#4D5562]">
        <p className={ inputLang == 'si' ? `rounded-md bg-[#4D5562] text-[#CDD5E0] text-[14px] px-2 py-1 font-bold ` : ' px-2 py-1 font-bold'}> Direct Languge</p>
          <input type="radio" name="lang" id="en" onClick={()=>setInputLang('en')} className='hidden'/>
          <label htmlFor="en" className={ inputLang == 'en' ? `rounded-md bg-[#4D5562] text-[#CDD5E0] text-[14px] px-2 py-1 font-bold ` : ' px-2 py-1 font-bold'}> English</label>
          <input type="radio" name="lang" id="fr" onClick={()=>setInputLang('fr')} className='hidden'/>
          <label htmlFor="fr" className={ inputLang == 'fr' ? `rounded-md bg-[#4D5562] text-[#CDD5E0] text-[14px] px-2 py-1 font-bold` : ' px-2 py-1 font-bold'}> France</label>    
            <select name="" id="" onChange={(e) =>setInputLang(e.target.value)} className={ inputLang !==  'si' && inputLang !==  'fr' && inputLang !==  'en' ? `rounded-md bg-[#4D5562] text-[#CDD5E0] text-[14px] px-2 py-1 font-bold focus:outline-none ` : 'focus:outline-none rounded-md bg-transparent text-[14px] px-2 py-1 font-bold '}>
            {langues.map((langue)=> <option value={langue[0]}> {langue[1]}</option>)}
          </select>
      </div>

        <textarea name="" id="" onChange={(e)=> setText( e.target.value)}  value={text} maxLength={500} className='text-[#CDD5E0] bg-transparent w-full h-full resize-none focus:outline-none mt-4 font-bold' ></textarea>
        <p className='text-[#4D5562] text-[12px] ml-auto mb-3'> {text.length}/500</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
          <img src="/Copy.svg" alt="" className='p-1 border-[#4D5562] border-2 rounded-lg cursor-pointer' onClick={handleCopy}/>
          </div>
          <button className='flex gap-2 bg-[#3762e4] py-2 px-4 text-[16px] rounded-lg border-[#7CA9F3] border' >
            <img src="/Sort_alfa.svg" alt="" />Translate
          </button>
        </div>
     </div>
    
    </div>
  )
}

export default LanguageInput