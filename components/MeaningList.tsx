import { currentSearchedWord, meaningListSelector } from "@/reducers/wordSlice";
import { useSelector } from "react-redux";
import Meaning from "./Meaning";
import { useAppSelector } from "@/reducers/store";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

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
              <Synonyms data={meaning.synonyms} />
              <Antonyms data={meaning.antonyms} />
            </Meaning>
          );
        })}
    </>
  );
};

export default MeaningList;
