

const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
        content: DataTypes.STRING,
        image: DataTypes.STRING,
    
      published: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts'
    });
  
    return BlogPost;
  };
  
  module.exports = BlogPostModel;