const { crud } = require('../../models');

exports.getCrud = async (req, res) => {
   try {
      const posts = await crud.findAll();

      res.send({
         status: 'success',
         data: {
            posts: posts,
         },
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         status: 'error',
         message: 'server error',
      });
   }
};

exports.addCrud = async (req, res) => {
   try {
      const { body } = req;
      const { title, content } = body;

      const post = await crud.create({
         title: title,
         content: content,
         deleted: 0,
      });
      res.send({
         status: 'success',
         message: 'Post Succesfully Added',
      });
   } catch (err) {
      console.log(err);
      res.status(500).send({
         status: 'error',
         message: err,
      });
   }
};

exports.updateCrud = async (req, res) => {
   const { id } = req.params;
   const { body } = req;
   try {
      //   const findPost = await crud.findByPk(id);
      const updatedPost = await crud.update(body, {
         where: {
            id: id,
         },
      });

      const findUpdatedPost = await crud.findOne({
         where: { id: id },
      });

      res.send({
         status: 'success',
         message: 'User Succesfully updated',
         data: {
            findUpdatedPost,
         },
      });
   } catch (err) {
      console.log(err);
      res.status(500).send({
         status: 'error',
         message: err,
      });
   }
};

exports.deletePost = async (req, res) => {
   try {
      const { id } = req.params;
      const deletedPost = await crud.destroy({ where: { id } });

      res.send({
         status: 'successfully deleted',
         data: {
            id: id,
         },
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         status: 'error',
         message: 'server error',
      });
   }
};
