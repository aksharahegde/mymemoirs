<template>
  <section>
    <div class="relative px-6 w-full xl:px-0">
      <div class="container flex relative z-10 flex-col-reverse items-center pt-6 mx-auto lg:pt-32 md:flex-row">
        <div class="relative w-full h-full lg:w-1/2 lg:pr-10 xl:pr-0">
          <HomeNoteOne />
          <HomeNoteTwo class="top-1/4 right-1/4 shadow-md md:absolute" />
          <HomeNoteThree />
        </div>
        <div class="w-full h-full lg:w-1/2">
          <Logo class="mb-4"/>
          <div class="mb-6 md:w-max">
            <h1 class="overflow-hidden pr-5 text-5xl font-bold text-gray-900 border-r-4 md:whitespace-nowrap md:animate-typing border-r-white">Start writing your journal now!</h1>
          </div>
          <!-- <h1 class="mb-8 text-4xl font-bold text-gray-900 md:text-7xl" ref="el">
            Start Writing Your Journal Now!
          </h1> -->
          <p class="mb-8 text-xl font-medium text-gray-800 font-regular">
            Craft your personal online journal, fully customizable to your
            preferences.
          </p>
          <nuxt-link
            to="/login"
            type="button"
            class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
          >
            Start writing now
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
