export async function up(knex) {
    await knex.schema.alterTable('transactions', (table) => {
        table.uuid('session_id').after('id').index();
    });
}
export async function down(knex) {
    await knex.schema.alterTable('transactions', (table => {
        table.dropColumn('session_id');
    }));
}
//# sourceMappingURL=20250819144516_add-session-id-to-transactions.js.map