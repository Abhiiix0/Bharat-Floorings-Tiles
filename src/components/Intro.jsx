
const Intro = ({ intro1, intro2, intro3 }) => {
  return (
    <div className="hidden font-Inter lg:flex items-center justify-between 2xl:text-base pt-11 pb-24 xl:pb-[119px] lg:text-sm text-xs">
      <span>{intro1}</span>
      <span>{intro2}</span>
      <span>{intro3}</span>
    </div>
  );
};

export default Intro;
