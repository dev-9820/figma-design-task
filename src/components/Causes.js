import ProgressBar from "@ramonak/react-progress-bar";

import disease from '../images/disease.jpg'
import flood from '../images/flood.jpg'
import earthquake from '../images/earthquake.jpg'
import {blue} from "next/dist/lib/picocolors";

const Causes = () => {
  return(
      <div className="md:h-screen mt-8 mb-32 border-t-2 border-green-300">
          <div className=" justify-center flex h-fit mx-32">

              <div className=" h-fit mt-14 w-fit">
                  <h1 className="text-4xl font-bold text-center">Urgent Causes</h1>
                  <h1 className="text-xl font-light text-center mt-2">Supporting urgent causes, changing lives.</h1>
              </div>
          </div>
          <div className="-translate-y-12 grid grid-cols-1 id md:grid-cols-3 mx-10 mt-10 md:mx-32 h-96">
              <div className=" bg-white mt-5 md:m-12 rounded-xl shadow-md h-96 shadow-gray-700">
                  <img className="rounded-t-xl md:h-52" src={earthquake} alt="logo"/>
                  <h1 className="px-4 pt-5 pb-2 font-bold">Morocco strikes with earthquake</h1>
                  <h1 className="px-4">Current situation for Morocco have gone
                      horrible due to the strike of Earthquake </h1>
              </div>
              <div className="bg-white my-5 md:m-12 rounded-xl shadow-md h-96 shadow-gray-700">
                  <img className="rounded-t-xl md:h-52" src={disease} alt="logo"/>
                  <h1 className="px-4 pt-5 pb-2 font-bold">Harmful Disease in Air</h1>
                  <h1 className="px-4">World have been infected with deadly life
                      taking virus ..... </h1>
                  <ProgressBar className="mx-5 min-h-5 mt-8" transitionTimingFunction="ease" bgColor="green" isLabelVisible={false} completed={80}/>
              </div>
              <div className="bg-white my-5  md:m-12 rounded-xl shadow-md h-96 shadow-gray-700">
                  <img className="rounded-t-xl w-full h-52" src={flood} alt="logo"/>
                  <h1 className="px-4 pt-5 pb-2 font-bold">Patna suffer with heavy Flood</h1>
                  <h1 className="px-4">People in patna have suffered a very heavy
                      flood in past few days </h1>
              </div>
          </div>
      </div>
  )
}
export default Causes;