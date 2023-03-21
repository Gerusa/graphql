// fileLoader: le os arquivos do path informado e junta todos eles
// mergeTypes: faz o merge/ agrupamento
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

// path do node
import path from 'path';

// _dirname representa onde este arquivo typeDefs esta (pasta graphql)
// ** indica que eh para acessar qualquer pasta dentro do dirname
// *.gql indica que eh para acessar todos os arquivos com essa extensao
const typesArray = fileLoader(path.join(__dirname, 'modules', '**', '*.gql'));

const typeDefs = mergeTypes(typesArray);

console.log(typeDefs);

export default typeDefs;

