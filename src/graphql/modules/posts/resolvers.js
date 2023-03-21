import Post from '../../../models/Post';
import User from '../../../models/User';

export default {
    // resolvendo a propriedade fullName do user
    Post: {
        author: async (post) => await User.findById(post.author),
    },
    Query: {
        posts: async () => await Post.find(),
        post: (_, { id }) => Post.findById(id),
    },
    Mutation: {
        // o data pode ser usado pois o postInput foi criado no schema
        createPost: (_, { data }) => Post.create(data),
        // new: true indica que eh para retornar os dados atualizados
        updatePost: (_, { id, data }) => Post.findOneAndUpdate(id, data, { new: true }),
        deletePost: async (_, { id }) => {
            const deleted = await Post.findByIdAndDelete(id);
            // exclamacao 2x forca que o retorno seja booleano
            return !!deleted;
        }
    },
};