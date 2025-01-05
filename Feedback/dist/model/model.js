"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
exports.user = (0, pg_core_1.pgTable)("user", {
    id: (0, pg_core_1.uuid)().primaryKey().defaultRandom().notNull(),
    name: (0, pg_core_1.varchar)("name", { length: 50 }).notNull(),
    message: (0, pg_core_1.varchar)("message", { length: 500 }).array().default((0, drizzle_orm_1.sql) `'{}'::text[]`),
    createdAt: (0, pg_core_1.timestamp)('created_at').default((0, drizzle_orm_1.sql) `NOW()`),
});
//# sourceMappingURL=model.js.map