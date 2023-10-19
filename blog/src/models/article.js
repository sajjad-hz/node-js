import { DataTypes } from 'sequelize'
import { BaseModel, sequelize } from '../config/databse';

class Article extends BaseModel {}

Article.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'articles' 
});

export default Article