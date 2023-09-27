const Synonyms = ({ data }: { data: string[] }) => {
  return (
    <section>
      <p>Synonyms</p>
      {data !== undefined &&
        data.map((synonym, k) => {
          return <p key={k}>{synonym}</p>;
        })}
    </section>
  );
};

export default Synonyms;
