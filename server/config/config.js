export default {
  port: process.env.PORT || 7667,
  database:{
    mongoDb:{
        url:process.env.MONGO_URL|| 'mongodb://localhost:27017/colab-fullstack-todo-1'
    }
  }
}