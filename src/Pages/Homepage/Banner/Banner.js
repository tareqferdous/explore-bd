import React from "react";

const Banner = () => {
  return (
    <div className="bg-blue-100">
      <section class="px-4 py-32 mx-auto max-w-7xl">
        <div class="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
          <h1 class="mb-3 text-4xl font-bold text-gray-900 md:text-5xl md:leading-tight md:font-extrabold">
            Find Your Next Tour Destinations
          </h1>
          <p class="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
            Bangladesh is a land of river and smiling people in South Asia,
            exhilarating mix with fascinating history, vibrant cultures and
            beauty of nature is waiting to welcome you.
          </p>
          <form class="grid  w-full grid-cols-1 gap-3 pt-1 mx-auto mb-8 lg:grid-cols-6 md:w-7/12">
            <label class="col-auto lg:col-span-4">
              
              <input
                class="mt-0 bg-gray-100 p-3 w-full form-input form-input-lg"
                type="email"
                placeholder="Find Your Destination.."
                required="true"
              />
            </label>
            <button
              class="w-full col-auto bg-purple-700 text-white rounded btn-lg lg:col-span-2"
              type="submit"
            >
              Get Started
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Banner;
