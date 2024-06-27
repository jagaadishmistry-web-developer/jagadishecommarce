const TimmerSettings = () => {
  return (
    <>
      <div className="bg-secemdry text-white flex flex-col items-center py-7 text-center">
        <h1 className="xl:text-4xl text-2xl font-medium pb-6">
          Deal of The Day
        </h1>
        <div className="flex md:gap-7 gap-1 md:text-4xl font-semibold">
          <span>
            <h1>05</h1>
            <h2 className="text-base font-normal">Days</h2>
          </span>
          <span>:</span>
          <span>
            <h1>07</h1>
            <h2 className="text-base font-normal">Hours</h2>
          </span>
          <span>:</span>
          <span>
            <h1>08</h1>
            <h2 className="text-base font-normal">Minutes</h2>
          </span>
          <span>:</span>
          <span>
            <h1>08</h1>
            <h2 className="text-base font-normal">Seconds</h2>
          </span>
        </div>
      </div>
    </>
  );
};

export default TimmerSettings;
