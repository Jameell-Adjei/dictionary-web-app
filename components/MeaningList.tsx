import { currentSearchedWord, meaningListSelector } from "@/reducers/wordSlice";
import { useSelector } from "react-redux";
import Meaning from "./Meaning";
import { useAppSelector } from "@/reducers/store";

const MeaningList = () => {
  const meaningList = useSelector(meaningListSelector);
  const word = useAppSelector(currentSearchedWord);
  return (
    <>
      <h1>{word}</h1>
      {meaningList &&
        meaningList.map((meaning, i) => {
          return (
            <Meaning key={i} data={meaning}>
              <p>Synonyms</p>
              {meaning.synonyms !== undefined &&
                meaning.synonyms.map((synonym) => {
                  return (
                    <>
                      <p>{synonym}</p>
                    </>
                  );
                })}
            </Meaning>
          );
        })}
    </>
  );
};

export default MeaningList;
