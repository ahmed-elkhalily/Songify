<template>
  <!-- Registration Form -->
  <vee-form :validation-schema="schema" :initial-values="userData" @submit="submit">
    <div
      class="text-white text-center p-2 mb-3"
      v-show="reg_show_alert"
      :class="reg_alert_variation"
    >
      {{ reg_alert_message }}
    </div>
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <vee-field
        type="text"
        name="name"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Name"
      />
      <ErrorMessage class="text-red-400" name="name" />
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-400" name="email" />
    </div>
    <!-- Age -->
    <div class="mb-3">
      <label class="inline-block mb-2">Age</label>
      <vee-field
        name="age"
        type="number"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
      />
      <ErrorMessage class="text-red-400" name="age" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field name="password" :validateOnInput="true" v-slot="{ field, errors }">
        <input
          type="password"
          placeholder="Password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
          v-bind="field"
        />
        <div class="text-red-500" v-for="error in errors" :key="error">
          {{ error }}
        </div>
      </vee-field>
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Confirm Password</label>
      <vee-field
        name="confirmPassword"
        :validateOnInput="true"
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Confirm Password"
      />
      <ErrorMessage class="text-red-400" name="confirmPassword" />
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label class="inline-block mb-2">Country</label>
      <vee-field
        as="select"
        name="country"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
                  duration-500 focus:outline-none focus:border-black rounded"
      >
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="Antercatica">Antercatica</option>
      </vee-field>
      <ErrorMessage class="text-red-400" name="country" />
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <vee-field
        name="tos"
        type="checkbox"
        value="1"
        class="w-4 h-4 float-left -ml-6 mt-1 rounded"
      />
      <label class="inline-block">Accept terms of service</label>
      <br />
      <ErrorMessage class="text-red-400" name="tos" />
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
  name: 'RegistrationForm',
  data() {
    return {
      schema: {
        name: 'required|alphaSpaces|min:4|max:30',
        email: 'required|email',
        age: 'required|min_value:18|max_value:100',
        password: 'required|alphaDash|min:6|max:30',
        confirmPassword: 'password_dismatch:@password',
        country: 'required|excluded_country:Antercatica',
        tos: 'tos'
      },
      userData: {
        country: 'Mexico'
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
        await this.$store.dispatch('register', values);
      } catch (error) {
        this.reg_alert_variation = 'bg-red-500';
        this.reg_alert_message = error.message;
        return;
      }

      this.reg_submition = true;
      this.reg_alert_variation = 'bg-green-500';
      this.reg_alert_message = 'Your Registering Successed';
      document.location.reload();
    }
  }
};
</script>
