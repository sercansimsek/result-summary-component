export const App = () => {
  return (
    <div className="flexCenter bg-main min-h-screen font-hanken">
      <div className="flexCenter bg-gradient-to-b from-gradientFrom to-gradientTo p-6 rounded-b-2xl">
        <span className="text-lightLavendar font-bold text-xl">Your Result</span>
        <div className="flexCenter rounded-full bg-gradient-to-b from-circleGradientFrom to-circleGradientTo h-32 w-32">
          <div className="flexCenter">
            <span className="text-white font-extrabold text-[48px]">76 </span> 
            <span className="text-darkGrayBlue">of 100</span>
          </div>
        </div>
        <span>Great</span>
        <span>
          You scored higher than 65% of the people who have taken these tests.
        </span>
      </div>
      <div>
        <span>Summary</span>
        <div>
          <div>Reaction</div>
          <div>Reaction</div>
          <div>Reaction</div>
          <div>Reaction</div>
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
};
