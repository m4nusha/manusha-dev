import React from "react";

export default function BackgroundClouds() {
  const getRandomPosition = (axis: string) => {
    return axis === "vertical"
      ? `${Math.floor(Math.random() * 100)}vh`
      : `${Math.floor(Math.random() * 100)}vw`;
  };

  const getRandomCloudType = () => {
    const types = ["type1", "type2", "type3"];
    return types[Math.floor(Math.random() * types.length)];
  };

  const clouds = Array.from({ length: 25 });

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
      {clouds.map((_, i) => {
        const cloudType = getRandomCloudType();
        return (
          <div
            key={i}
            className={`absolute cloud ${cloudType} flex flex-col gap-0`}
            style={{
              top: getRandomPosition("vertical"),
              left: getRandomPosition("horizontal"),
              animationDuration: `${50 + Math.random() * 50}s`,
            }}
          >
            {cloudType === "type1" && (
              <>
                <div className="flex">
                  {[...Array(10)].map((_, j) => (
                    <div
                      key={j}
                      className={`w-4 h-4 ${
                        j >= 2 && j < 8 ? "bg-pink-300" : "bg-transparent"
                      }`}
                    ></div>
                  ))}
                </div>
                <div className="flex">
                  {[...Array(10)].map((_, j) => (
                    <div
                      key={j}
                      className={`w-4 h-4 ${
                        j >= 1 && j < 9 ? "bg-pink-300" : "bg-transparent"
                      }`}
                    ></div>
                  ))}
                </div>
              </>
            )}

            {cloudType === "type2" && (
              <>
                <div className="flex">
                  {[...Array(10)].map((_, j) => (
                    <div
                      key={j + 10}
                      className={`w-4 h-4 ${
                        j >= 2 && j < 7 ? "bg-pink-300" : "bg-transparent"
                      }`}
                    ></div>
                  ))}
                </div>
                <div className="flex">
                  {[...Array(10)].map((_, j) => (
                    <div
                      key={j}
                      className={`w-4 h-4 ${
                        j >= 1 && j < 8 ? "bg-pink-300" : "bg-transparent"
                      }`}
                    ></div>
                  ))}
                </div>
                <div className="flex">
                  {[...Array(10)].map((_, j) => (
                    <div
                      key={j + 10}
                      className={`w-4 h-4 ${
                        j < 9 ? "bg-pink-300" : "bg-transparent"
                      }`}
                    ></div>
                  ))}
                </div>
              </>
            )}

            {cloudType === "type3" && (
              <>
                <div className="flex">
                  {[...Array(10)].map((_, j) => (
                    <div
                      key={j}
                      className={`w-4 h-4 ${
                        j >= 3 && j < 6 ? "bg-pink-300" : "bg-transparent"
                      }`}
                    ></div>
                  ))}
                </div>
                <div className="flex">
                  {[...Array(10)].map((_, j) => (
                    <div
                      key={j}
                      className={`w-4 h-4 ${
                        j >= 2 && j < 7 ? "bg-pink-300" : "bg-transparent"
                      }`}
                    ></div>
                  ))}
                </div>
                <div className="flex">
                  {[...Array(10)].map((_, j) => (
                    <div
                      key={j}
                      className={`w-4 h-4 ${
                        j >= 1 && j < 8 ? "bg-pink-300" : "bg-transparent"
                      }`}
                    ></div>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}