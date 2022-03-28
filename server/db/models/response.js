'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User,{foreignKey:'user_id'})
      this.belongsTo(models.Global_news,{foreignKey:'global_news_id'})
      this.belongsTo(models.Local_news,{foreignKey:'local_news_id'})
    }
  }
  Response.init({
    user_id: DataTypes.INTEGER,
    global_news_id: DataTypes.INTEGER,
    local_news_id: DataTypes.INTEGER,
    status:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Response',
  });
  return Response;
};
