import mongoose from 'mongoose';

export default () => {
  try {
    mongoose.connect(
      `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ds155461.mlab.com:55461/eric_lee_portfolio`,
      { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true },
      () => console.log('Connected MLab Successfully')
    );
  } catch (error) {
    console.error('Connected to MLab Failed !');
  }
};
