<template>
  <div>
    <input type="text" v-model="form.name" />
    <input type="email" v-model="form.email" />
    <button @click="handleSubmitUser">Submit</button>

    <table>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    users: [],
    form: {},
    userId: null,
  }),
  mounted() {
    this.getUsers();

    window.Echo.channel(`newUserEvent`).listen(".new-user-event", (e) => {
      console.log(e, "SOKETI SUCCESS!");
      this.getUsers();
    });

    window.Echo.channel("userEvent").listen(".user-event", (e) => {
      console.log(e, "SOKETI SUCCESS!");
      this.getUsers();
    });
  },
  methods: {
    getUsers() {
      axios.get(`/api/users`).then((response) => (this.users = response.data));
    },
    handleSubmitUser() {
      axios.post(`/api/users`, this.form).then((response) => {
        this.form = {};
        this.userId = response.data.id;
      });
    },
  },
};
</script>

<style>
</style>