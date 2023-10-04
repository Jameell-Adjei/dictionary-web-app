const Synonyms = ({ data }: { data: string[] }) => {
  if (data.length !== 0) {
    return (
      <section className="wordContainer">
        <p className="word-label">Synonyms</p>
        {data !== undefined &&
          data.map((synonym, k) => {
            return <p key={k} className="word">{synonym}</p>;
          })}
      </section>
    );
  }
};

export default Synonyms;
