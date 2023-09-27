const Synonyms = ({ data }: { data: string[] }) => {
  if (data.length !== 0) {
    return (
      <section>
        <p>Synonyms</p>
        {data !== undefined &&
          data.map((synonym, k) => {
            return <p key={k}>{synonym}</p>;
          })}
      </section>
    );
  }
};

export default Synonyms;
