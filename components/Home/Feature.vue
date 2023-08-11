<template>
  <div class="relative px-6 w-full xl:px-0">
    <img
      class="object-cover object-center absolute inset-0 w-full h-full"
      src="/feature_bg.svg"
    />
    <div class="z-10 pt-10 md:pt-40">
      <div class="container mx-auto">
        <div class="flex flex-col-reverse items-center pb-12 md:flex-row">
          <div class="w-full md:w-1/2 lg:w-2/3 xl:pr-20 md:pr-6">
            <div class="py-2 text-color">
              <h1 class="text-2xl font-bold text-gray-900 md:mb-8 md:text-5xl">
                Capture . Monitor . Challenge
              </h1>
              <p class="mb-8 text-xl font-medium text-gray-800 font-regular">
                Whether you are looking to capture your daily emotions and
                activities in a contemplative journal, monitor milestones, or
                even document your dreams within a dream journal, we've got you
                taken care of. You have the flexibility to create your preferred
                categories and adjust the privacy settings of your journal,
                whether you want it public or private, based on your
                convenience.
              </p>
              <nuxt-link
                to="/login"
                type="button"
                class="text-gray-900 bg-red-300 hover:bg-red-400/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
              >
                Get started
              </nuxt-link>
            </div>
          </div>
          <div
            class="flex relative justify-center items-end w-full md:h-96 lg:w-1/3 md:w-1/2"
          >
            <div class="hidden absolute top-0 z-10 text-xs text-gray-400 md:block">
              Photo by
              <a
                href="https://unsplash.com/@bookblock?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Bookblock</a
              >
              on
              <a
                href="https://unsplash.com/photos/11-15cYOiQc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                >Unsplash</a
              >
            </div>
            <img
              class="hidden object-cover object-left-bottom absolute inset-0 w-full h-full rounded-md filter sepia transition-all duration-500 hover:sepia-0 md:block"
              src="bookblock.jpg"
              alt="bookblock"
            />
            <div
              class="relative z-10 p-6 bg-white rounded border border-gray-300 shadow-md md:border-none md:shadow-md lg:w-10/12 lg:-mb-20"
            >
              <div
                class="flex justify-between items-center mb-8 w-full sm:w-full"
              >
                <div class="flex items-center">
                  <div class="p-4 bg-yellow-200 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M16.53 9.78a.75.75 0 0 0-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5Z"
                      />
                      <path
                        fill="currentColor"
                        d="m12.54.637l8.25 2.675A1.75 1.75 0 0 1 22 4.976V10c0 6.19-3.771 10.704-9.401 12.83a1.704 1.704 0 0 1-1.198 0C5.77 20.705 2 16.19 2 10V4.976c0-.758.489-1.43 1.21-1.664L11.46.637a1.748 1.748 0 0 1 1.08 0Zm-.617 1.426l-8.25 2.676a.249.249 0 0 0-.173.237V10c0 5.46 3.28 9.483 8.43 11.426a.199.199 0 0 0 .14 0C17.22 19.483 20.5 15.461 20.5 10V4.976a.25.25 0 0 0-.173-.237l-8.25-2.676a.253.253 0 0 0-.154 0Z"
                      />
                    </svg>
                  </div>
                  <div class="ml-6">
                    <h3 class="mb-1 text-2xl font-bold leading-5 text-gray-800">
                      24
                    </h3>
                    <p
                      class="text-sm font-normal tracking-normal leading-5 text-gray-600"
                    >
                      Challenge Completed
                    </p>
                  </div>
                </div>
                <div>
                  <div class="flex items-center pl-3 text-green-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-trending-up"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <polyline points="3 17 9 11 13 15 21 7"></polyline>
                      <polyline points="14 7 21 7 21 14"></polyline>
                    </svg>
                    <p
                      class="pl-1 text-xs font-bold tracking-wide leading-normal text-green-500"
                    >
                      7.2%
                    </p>
                  </div>
                  <p
                    class="text-xs font-normal tracking-normal leading-4 text-right text-green-500"
                  >
                    Increase
                  </p>
                </div>
              </div>
              <div class="relative mb-3">
                <hr class="h-1 bg-gray-200 rounded-sm" />
                <hr class="absolute top-0 w-7/12 h-1 bg-green-600 rounded-sm" />
              </div>
              <h4
                class="text-base font-normal tracking-normal leading-5 text-gray-600"
              >
                Yearly Goal
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Analyticss -->
    <div class="pt-10 md:pt-40">
      <div class="container mx-auto">
        <div class="flex flex-row-reverse flex-wrap-reverse items-center pb-12">
          <div class="z-10 w-full md:w-1/2 lg:w-2/3 xl:pl-20 md:pl-6">
            <div class="py-2 text-color">
              <h1 class="mb-8 text-2xl font-bold text-gray-900 md:text-5xl">
                Insights with Our Full-Fledged Analytics
              </h1>
              <p class="mb-8 text-xl font-medium text-gray-800 font-regular">
                Gain deep insights into your personal online journaling patterns
                and habits. Our comprehensive analytics suite offers a range of
                powerful tools to help you uncover trends, track your emotions,
                and visualize your thoughts over time.
              </p>
              <nuxt-link
                to="/login"
                type="button"
                class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
              >
                Sign up now
              </nuxt-link>
            </div>
          </div>
          <div
            class="flex relative justify-center items-end w-full md:h-96 lg:w-1/3 md:w-1/2"
          >
          <div class="hidden absolute top-0 z-10 text-xs text-gray-400 md:block">
              Photo by <a href="https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Winkler</a> on <a href="https://unsplash.com/photos/IrRbSND5EUc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <img
            class="hidden object-cover object-left-bottom absolute inset-0 w-full h-full rounded-md filter -hue-rotate-180 transition-all duration-500 hover:sepia-0 md:block"
              src="analytics.jpg"
              alt="chart"
            />
            <div
            class="relative p-6 w-full bg-white rounded border border-gray-300 shadow-md md:border-none md:shadow-md lg:w-10/12 lg:-mb-20"
            >
              <div
                class="flex justify-between items-center mb-8 w-full sm:w-full"
              >
                <div class="flex items-center">
                  <div class="p-4 bg-red-200 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-red-500" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16S9.914 5 16 5zm-1 4v10h-3l4 4l4-4h-3V9z"/></svg>
                  </div>
                  <div class="ml-6">
                    <h3 class="mb-1 text-2xl font-bold leading-5 text-gray-800">
                      8
                    </h3>
                    <p
                      class="text-sm font-normal tracking-normal leading-5 text-gray-600"
                    >
                      Tasks Pending
                    </p>
                  </div>
                </div>
                <div>
                  <div class="flex items-center pl-3 text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m16 18l2.29-2.29l-4.88-4.88l-4 4L2 7.41L3.41 6l6 6l4-4l6.3 6.29L22 12v6h-6z"/></svg>
                    <p
                      class="pl-1 text-xs font-bold tracking-wide leading-normal text-red-500"
                    >
                      65%
                    </p>
                  </div>
                  <p
                    class="text-xs font-normal tracking-normal leading-4 text-right text-red-500"
                  >
                    Decrease
                  </p>
                </div>
              </div>
              <div class="relative mb-3">
                <hr class="h-1 bg-gray-200 rounded-sm" />
                <hr class="absolute top-0 w-2/12 h-1 bg-red-600 rounded-sm" />
              </div>
              <h4
                class="text-base font-normal tracking-normal leading-5 text-gray-600"
              >
                Daily Goal
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
