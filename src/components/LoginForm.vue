<template>
  <!-- Login Form -->
  <vee-form :validation-schema="schema" @submit="submit">
    <div
      class="text-white text-center p-2 mb-3"
      v-show="reg_show_alert"
      :class="reg_alert_variation"
    >
      {{ reg_alert_message }}
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage name="email" class="text-red-400" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        type="password"
        name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <ErrorMessage name="password" class="text-red-400" />
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
                hover:bg-purple-700"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      schema: {
        email: 'required|email',
        password: 'required|alphaDash|min:5|max:30'
      },
      reg_submition: false,
      reg_show_alert: false,
      reg_alert_variation: 'bg-gray-300',
      reg_alert_message: 'Please wait! we are registring you.'
    };
  },
  methods: {
    async submit(values) {
      this.reg_show_alert = true;
      try {
        await this.$store.dispatch('login', values);
      } catch (error) {
        this.reg_alert_variation = 'bg-red-500';
        this.reg_alert_message = error.message;
        return;
      }
      this.reg_submition = true;
      this.reg_alert_variation = 'bg-green-500';
      this.reg_alert_message = 'Your logging Successed';
      document.location.reload();
    }
  }
};
</script>
