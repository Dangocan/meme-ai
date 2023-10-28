import axios from "axios";
import { IMeme } from "../../interfaces/Meme";
import { MemeCard } from "../../components/MemeCard";
import { IoIosGlobe } from "react-icons/io";
import { useEffect, useState } from "react";

function MemesList() {
  const [articlesShowing, setArticlesShowing] = useState<IMeme[]>(
    [] as IMeme[]
  );

  const [loading, setLoading] = useState<boolean>(true);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const articleSArray = await axios.get(
        "https://api.imgflip.com/get_memes"
      );
      setArticlesShowing(articleSArray?.data?.data?.memes as IMeme[]);
    } catch (error) {
      console.log("Falha ao acessar artigos");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    console.log(articlesShowing);
  }, [articlesShowing]);

  return (
    <div className="w-screen min-h-screen flex justify-center overflow-x-hidden bg-zinc-100">
      <div className="w-[80%] p-2 shadow-md flex flex-col bg-zinc-50 items-center">
        <div className="flex flex-col items-center border-b-[1px] border-[#302E53] w-full py-4">
          <div className="w-[80px] h-[80px] border-2 border-[#302E53] p-2 rounded-[50%] flex justify-center items-center">
            <IoIosGlobe className="w-[80px] h-[80px]" color={"#302E53"} />
          </div>

          <h1 className="text-[#302E53] text-2xl font-bold mt-2">
            Meme Browser
          </h1>
        </div>
        {loading || (
          <div className="flex flex-wrap items-center w-full">
            {articlesShowing.map((article, index) => (
              <MemeCard content={article} key={`meme-card-${index}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MemesList;
