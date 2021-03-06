import {createStore} from "vuex";

const store = createStore({
  state() {
    return {
       memories: [
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1618059485046-161ace8b928d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMTcyNjIyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
          title: "awesome memory 1",
          text: "The first memory",
        },
        {
          id: 2,
          image:
            "https://images.unsplash.com/photo-1557403788-6e6a0d04b577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTcyNjIyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
          title: "awesome memory 2",
          text: "The second memory",
        },
        {
          id: 3,
          image:
            "https://images.unsplash.com/photo-1591702463442-f240d0543927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxMTcyNjIyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
          title: "awesome memory 3",
          text: "The third memory",
        },
      ],
    }
  },
  getters: {
    memories (state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find(memory => memory.id == memoryId);
      }
   
    }
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.image,
        text: memoryData.text,
      }

      state.memories.unshift(newMemory);
    }
  },
  actions: {
    addMemory(context, memoryData) {
      // or reach out to database here
      context.commit('addMemory', memoryData);
    }
  }
});

export default store;