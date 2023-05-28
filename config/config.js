require('dotenv').config()

const Port = process.env.NODE_ENV === 'test' ? 4001 : (process.env.PORT || 4000);

const MongodbUrl =  process.env.NODE_ENV === 'production' ? process.env.MONGODB_URL_PRODUCTION : (process.env.MONGODB_URL_DEVELOPMENT || 'mongodb+srv://shivamtewari2002:nitkwifiworst@cluster0.3wzmcws.mongodb.net/?retryWrites=true&w=majority')

module.exports = {
  Port: Port,
  MongodbUrl: MongodbUrl
}