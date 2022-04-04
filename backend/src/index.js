import 'dotenv/config';

import initServer from "./app/server.js";
import initConnection from "./db/connection.js";

import * as UserSchema from './users/schema.js';
import * as SkillSchema from './skills/schema.js';

(async function() {
    let connection = await initConnection();
    UserSchema.initModel(connection);
    SkillSchema.initModel(connection);

    await initServer();
})();