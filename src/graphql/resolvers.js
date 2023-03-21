// fileLoader: le os arquivos do path informado e junta todos eles
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

// path do node
import path from 'path';

// _dirname representa onde este arquivo resolvers esta (pasta graphql)
// ** indica que eh para acessar qualquer pasta dentro do dirname
const resolversArray = fileLoader(path.join(__dirname, 'modules', '**', 'resolvers.js'));
const resolver = mergeResolvers(resolversArray);

export default resolver;

