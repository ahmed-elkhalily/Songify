import { createStore } from 'vuex';
import { auth, db } from '../includes/firebase';

export default createStore({
  state: {
    authModelShow: false,
    authLogin: false
  },
  mutations: {
    toggleAuthModel: state => {
      state.authModelShow = !state.authModelShow;
    },
    closeAuthModel: state => {
      state.authModelShow = false;
    },
    toggleAuthLogin: state => {
      state.authLogin = !state.authLogin;
    }
  },
  actions: {
    async register({ commit }, payload) {
      let userCred = null;
      userCred = await auth.createUserWithEmailAndPassword(payload.email, payload.password);

      await db
        .collection('users')
        .doc(userCred.user.uid)
        .set({
          email: payload.email,
          country: payload.country,
          name: payload.name,
          age: payload.age
        });

      userCred.user.updateProfile({
        displayName: payload.name
      });

      commit('toggleAuthLogin');
    },
    init_login({ commit }) {
      const user = auth.currentUser;
      if (user) commit('toggleAuthLogin');
    },
    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);
      commit('toggleAuthLogin');
    },
    async signout({ commit }, payload) {
      await auth.signOut();
      commit('toggleAuthLogin');
      if (payload.route.name === 'manage') {
        payload.router.push({ name: 'home' });
      }
    }
  }
});
