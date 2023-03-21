import User from '../../../models/User';

export default {
    // resolvendo a propriedade fullName
    User: {
        fullName: (user) => `${user.firstName} ${user.lastName}`

    },
    Query: {
        users: async () => await User.find(),
        user: async (_, { id }) => await User.findById(id),
    },
    Mutation: {
        // o data pode ser usado pois o userInput foi criado no schema
        createUser: (_, { data }) => User.create(data),
        // new: true indica que eh para retornar os dados atualizados
        updateUser: async (_, { id, data }) => User.findOneAndUpdate(id, data, { new: true }),
        deleteUser: async (_, { id }) => {
            const deleted = await User.findByIdAndDelete(id);
            // exclamacao 2x forca que o retorno seja booleano
            return !!deleted;
        }
    },
};