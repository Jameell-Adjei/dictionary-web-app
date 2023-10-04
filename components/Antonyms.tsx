const Antonyms = ({ data }: { data: string[] }) => {
  if (data.length !== 0) {
    return (
      <section className="wordContainer">
        <p className="word-label">Antonyms</p>
        {data !== undefined &&
          data.map((antonym, k) => {
            return <p key={k} className="word">{antonym}</p>;
          })}
      </section>
    );
  }
};

export default Antonyms;
