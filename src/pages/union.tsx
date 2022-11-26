const Union = () => {
  //エイリアス型
  type Combinable = number | string;
  type ConversionDescriptor = "as-number" | "as-text";

  function combine(
    input1: Combinable,
    input2: Combinable,
    //ユニオン型とリテラル型の組み合わせ
    //リテラル型は、文字列や数値のように、ある一定の値しか取らない型
    // let x: 1;xは1しか取らない
    //ユニオン型　『|』を用いて値を指定すること
    resultConversion: ConversionDescriptor
  ) {
    let result;
    if (
      (typeof input1 === "number" && typeof input2 === "number") ||
      resultConversion === "as-number"
    ) {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }

  return (
    <div>
      <h1>Union</h1>
      {combine(1, 2, "as-number")}
      <br />
      {combine("テスト", 2, "as-text")}
      <br />
      {combine("23", "33", "as-number")}
    </div>
  );
};

export default Union;
