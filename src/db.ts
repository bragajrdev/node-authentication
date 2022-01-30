import {Pool} from 'pg';

const connectionString = 'postgres://roasciit:iIIHtlcsQax_OFXvdemor7aWAsqUYtxE@kesavan.db.elephantsql.com/roasciit';
const db = new Pool({connectionString});

export default db;