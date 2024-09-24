import Loading from "./Loading";

type params = {
  isLoading: boolean;
  outputLang: string;
  setOutputLang: (text: string) => void;
  response: string;
};
const LanguageOutput = ({
  outputLang,
  setOutputLang,
  response,
  isLoading,
}: params) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(response);
  };
  const langues = [
    ["am", "Amharic"],
    ["sq-AL", "Albanian"],
    ["af", "Afrikaans"],
    ["ar-SA", "Arabic"],
    ["hy-AM", "Armenian"],
    ["az-AZ", "Azerbaijani"],
    ["bjs-BB", "Bajan"],
    ["eu-ES", "Basque"],
    ["bem-ZM", "Bemba"],
    ["cop-EG", "Coptic"],
    ["zh-cn", "china"],
    ["hr-HR", "Croatian"],
    ["dz-BT", "Dzongkha"],
    ["eo-EU", "Esperanto"],
    ["haw-US", "Hawaiian"],
    ["he-IL", "Hebrew"],
    ["it-IT", "Italian"],
    ["ja-JP", "Japanese"],
    ["kk-KZ", "Kazakh"],
    ["km-KM", "Khmer"],
    ["lo-LA", "Lao"],
    ["es", "Spanish"],
  ];
  return (
    <div className="w-5/6 flex flex-col sm:w-[470px] h-[290px] bg-[#121826cc] rounded-2xl border border-[#4D5562] text-[#e5e6e9] p-3 backdrop-blur">
      <div className="flex items-center  text-[#4D5562] w-full gap-4 p-2  pb-4 border-b border-[#4D5562]">
        <input
          type="radio"
          name="lang"
          id="eno"
          onClick={() => setOutputLang("en")}
          className="hidden"
        />
        <label
          htmlFor="eno"
          className={
            outputLang == "en"
              ? `rounded-md bg-[#4D5562] text-[#CDD5E0] text-[14px] px-2 py-1 font-bold`
              : " px-2 py-1 font-bold"
          }
        >
          {" "}
          English
        </label>
        <input
          type="radio"
          name="lang"
          id="fro"
          onClick={() => setOutputLang("fr")}
          className="hidden"
        />
        <label
          htmlFor="fro"
          className={
            outputLang == "fr"
              ? `rounded-md bg-[#4D5562] text-[#CDD5E0] text-[14px] px-2 py-1 font-bold`
              : " px-2 py-1 font-bold"
          }
        >
          {" "}
          France
        </label>
        <select
          name=""
          id=""
          onChange={(e) => setOutputLang(e.target.value)}
          className={
            outputLang !== "fr" && outputLang !== "en"
              ? `rounded-md bg-[#4D5562] text-[#CDD5E0] text-[14px] px-2 py-1 font-bold focus:outline-none `
              : "focus:outline-none rounded-md bg-transparent text-[14px] px-2 py-1 font-bold "
          }
        >
          {langues.map((langue) => (
            <option value={langue[0]}> {langue[1]}</option>
          ))}
        </select>
      </div>

      <p className="mt-2 h-full w-full ">
        {response} {isLoading && <Loading />}{" "}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img
            src="/Copy.svg"
            alt=""
            className="p-1 border-[#4D5562] border-2 rounded-lg cursor-pointer"
            onClick={handleCopy}
          />
        </div>
      </div>
    </div>
  );
};

export default LanguageOutput;
