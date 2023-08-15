<template>
  <div class="min-h-screen bg-red-50">
    <div class="px-4 py-16 w-full min-h-screen">
      <div class="flex flex-col justify-center items-start md:items-center">
        <Logo />
        <div
          class="p-4 mt-6 w-full bg-white rounded shadow md:p-10 md:mt-16 lg:w-1/3 md:w-1/2"
        >
          <p
            tabindex="0"
            role="heading"
            aria-label="Login to your account"
            class="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Login to your account
          </p>
          <p class="mt-4 text-sm font-medium leading-none text-gray-500">
            Dont have account? We will create one for you.
          </p>
          <div>
            <div class="mt-4">
              <label class="text-sm font-medium leading-none text-gray-800">
                Email
              </label>
              <input
                aria-label="enter email adress"
                role="input"
                type="email"
                v-model="email"
                class="py-3 pl-3 mt-2 w-full font-medium leading-none text-gray-800 bg-yellow-100 rounded-lg border focus:outline-none"
              />
            </div>
            <div class="mt-4">
              <button
                type="button"
                @click="signInWithOtp"
                :disabled="alertConfig.class !== null"
                class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 text-sm focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
              >
                <span
                  v-if="loading"
                  class="mr-1 loading loading-spinner"
                ></span>
                <span>{{ loading ? "Sending link" : "Get magic link" }}</span>
              </button>
              <transition name="slide">
                <div
                  v-if="showMessage"
                  class="alert"
                  :class="alertConfig.class"
                >
                  <Icon :name="alertConfig.icon" class="text-2xl" />
                  <span>
                    {{ alertConfig.message }}
                  </span>
                </div>
              </transition>
            </div>
            <span class="hidden alert-error md:alert-success"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const supabase = useSupabaseClient();
const email = ref("");
const loading = ref(false);
const showMessage = ref(false);

let alertConfig = {
  class: null,
  message: null,
  icon: "",
};

const signInWithOtp = async () => {
  loading.value = true;
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: "http://localhost:3000/confirm",
    },
  });
  loading.value = false;
  if (error) {
    console.log(error);
    alertConfig.class = "alert-error";
    alertConfig.message =
      error?.msg || "Failed to send login link to your email.";
    alertConfig.icon = "ic:round-warning";
  } else {
    console.log("in side else");
    alertConfig.class = "alert-success";
    alertConfig.message =
      "Magic link has been sent to your email. Please check your inbox.";
    alertConfig.icon = "material-symbols:library-add-check-outline-sharp";
  }
  showMessage.value = true;
};
</script>
