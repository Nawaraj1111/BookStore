import {DataTypes} from 'sequelize';
import connection from './index.js'

const book = connection.define(
  'Books',
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    // Model attributes are defined here
    writerName: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    authorName: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    pages:{
        type:DataTypes.INTEGER,
        allowNull:true,
    }
  }
);

export default book;
