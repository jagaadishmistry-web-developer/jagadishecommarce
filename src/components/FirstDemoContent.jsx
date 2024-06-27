const FirstDemoContent = (props) => {
  return (
    <>
      <div className="text-center xl:pt-24 pt-16">
        <i className="font-1 text-primary text-xl font-bold">{props.title1}</i>
        <h1 className="xl:text-2xl text-xl font-semibold">{props.title2}</h1>
        <p>{props.dec}</p>
      </div>
    </>
  );
};

export default FirstDemoContent;
