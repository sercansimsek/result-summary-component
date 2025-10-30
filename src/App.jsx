import cn from "classnames";
import dataFromServer from "../data.json";

export const App = () => {
  return (
    <div className="flexCenter bg-main min-h-screen font-hanken">
      <div className="bg-white w-[327px] sm:flex sm:rounded-2xl sm:w-max">
        <div className="flexCenter mainGradient p-6 rounded-b-2xl sm:w-[280px] sm:rounded-2xl">
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
        <div className="flex flex-col justify-start p-6 sm:justify-center sm:w-max">
          <span className="font-semibold text-lg text-darkGrayBlue mb-5">
            Summary
          </span>
          <div>
            <ul className="flex flex-col gap-3 mb-5">
              {dataFromServer.map((data) => (
                <li key={data.category}>
                  <div
                    className={cn("resultCard sm:gap-14", {
                      "bg-lightRedBcg": data.category === "Reaction",
                      "bg-orangeYellowBcg": data.category === "Memory",
                      "bg-greenTealBcg": data.category === "Verbal",
                      "bg-cobaltBlueBcg": data.category === "Visual",
                    })}
                  >
                    <div
                      className={cn("flex gap-3", {
                        "text-lightRed": data.category === "Reaction",
                        "text-orangeYellow": data.category === "Memory",
                        "text-greenTeal": data.category === "Verbal",
                        "text-cobaltBlue": data.category === "Visual",
                      })}
                    >
                      <img src={data.icon} alt={`${data.category} icon`} />
                      <span>{data.category}</span>
                    </div>
                    <div>
                      <span className="text-darkGrayBlue font-semibold">
                        {data.score}
                      </span>{" "}
                      <span className="text-darkGrayBlueFaded"> / 100</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-darkGrayBlue hover:bg-gradient-to-b hover:from-gradientFrom hover:to-gradientTo p-3 text-white font-bold text-lg rounded-3xl cursor-pointer">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
