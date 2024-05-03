const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User');

const Chat = sequelize.define('Chat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  problemSubject: {
    type: DataTypes.STRING
  },
  problemDescription: {
    type: DataTypes.STRING
  },
  uploadFile: {
    type: DataTypes.STRING(1000)
  },
  status: {
    type: DataTypes.INTEGER
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'chats',
  timestamps: false,
  underscored: true
});

const Message = sequelize.define('Message', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  isUser: {
    type: DataTypes.BOOLEAN,
    defaultValue: true // Set default value to true
  },
}, {
  tableName: 'messages',
  timestamps: false,
  underscored: true
});

Chat.hasMany(Message, { foreignKey: 'chatId' });
Message.belongsTo(Chat, { foreignKey: 'chatId' });

module.exports = {
  Chat,
  Message
};
