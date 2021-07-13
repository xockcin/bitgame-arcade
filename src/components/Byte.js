import OneBit from "./OneBit";

const Byte = ({ size, number, toggle }) => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = !!(number & (1 << i));
  }
  const bits = arr.map((bit) => {
    return <OneBit value={bit} toggle={toggle} />;
  });
  return <div className="byte">{bits}</div>;
};

export default Byte;
