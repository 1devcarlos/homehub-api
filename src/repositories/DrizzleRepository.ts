import { getTableName, type InferInsertModel, type InferSelectModel } from "drizzle-orm";
import type { PgTable } from "drizzle-orm/pg-core";

import { db } from "@/config/database";

export abstract class DrizzleRepository<TTable extends PgTable> {
  protected constructor(protected readonly table: TTable) {}

  async create(data: InferInsertModel<TTable>): Promise<InferSelectModel<TTable>> {
    const [created] = await db.insert(this.table).values(data).returning();

    if (!created) {
      throw new Error(`Failed to create ${getTableName(this.table)}`);
    }

    return created as InferSelectModel<TTable>;
  }
}
