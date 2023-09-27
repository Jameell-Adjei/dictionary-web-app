const Antonyms = ({ data }: { data: string[] }) => {
  if (data.length !== 0) {
    return (
      <section>
        <p>Antonyms</p>
        {data !== undefined &&
          data.map((antonym, k) => {
            return <p key={k}>{antonym}</p>;
          })}
      </section>
    );
  }
};

export default Antonyms;
