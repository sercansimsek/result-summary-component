import reactionImg from "./assets/images/icon-reaction.svg";
import memoryImg from "./assets/images/icon-memory.svg";
import verbalImg from "./assets/images/icon-verbal.svg";
import visualImg from "./assets/images/icon-visual.svg";

import dataFromServer from "./data/data.json";

export const App = () => {
  console.log(dataFromServer);

  return (
    <div className="flexCenter bg-main min-h-screen font-hanken">
      <div className="bg-white w-[327px]">
        <div className="flexCenter mainGradient p-6 rounded-b-2xl">
          <span className="text-lightLavendar font-bold text-xl mb-5">
            Your Result
          </span>
          <div className="flexCenter rounded-full circleGradient h-32 w-32 mb-5">
            <div className="flexCenter">
              <span className="text-white font-extrabold text-5xl">76 </span>
              <span className="text-darkGrayBlueFaded">of 100</span>
            </div>
          </div>
          <div className="flexCenter text-center gap-2">
            <span className="text-white font-bold text-2xl">Great</span>
            <span className="text-lightLavendar pb-1">
              You scored higher than 65% of the people who have taken these
              tests.
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start p-6">
          <span className="font-semibold text-lg text-darkGrayBlue mb-5">
            Summary
          </span>
          <div className="flex flex-col gap-3 mb-5">
            <div className="resultCard bg-lightRedBcg ">
              <div className="flex gap-3 text-lightRed ">
                <img src={reactionImg} alt="reaction icon" />
                <span>Reaction</span>
              </div>
              <div>
                <span className="text-darkGrayBlue">80</span>{" "}
                <span className="text-darkGrayBlueFaded"> / 100</span>
              </div>
            </div>

            <div className="resultCard bg-orangeYellowBcg">
              <div className="flex gap-3 text-orangeYellow">
                <img src={memoryImg} alt="memory icon" />
                <span>Memory</span>
              </div>
              <div>
                <span className="text-darkGrayBlue">80</span>{" "}
                <span className="text-darkGrayBlueFaded"> / 100</span>
              </div>
            </div>

            <div className="resultCard bg-greenTealBcg">
              <div className="flex gap-3 text-greenTeal">
                <img src={verbalImg} alt="verbal icon" />
                <span>Reaction</span>
              </div>
              <div>
                <span className="text-darkGrayBlue">80</span>{" "}
                <span className="text-darkGrayBlueFaded"> / 100</span>
              </div>
            </div>

            <div className="resultCard bg-cobaltBlueBcg">
              <div className="flex gap-3 text-cobaltBlue">
                <img src={visualImg} alt="visual icon" />
                <span>Reaction</span>
              </div>
              <div>
                <span className="text-darkGrayBlue">80</span>{" "}
                <span className="text-darkGrayBlueFaded"> / 100</span>
              </div>
            </div>
          </div>
          <button className="bg-darkGrayBlue hover:bg-gradient-to-b hover:from-gradientFrom hover:to-gradientTo p-3 text-white font-bold text-lg rounded-3xl cursor-pointer">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
