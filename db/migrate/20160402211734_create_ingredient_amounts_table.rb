class CreateIngredientAmountsTable < ActiveRecord::Migration
  def up
    execute <<-SQL
      create table ingredient_amounts (
        id serial primary key,
        ingredient_id integer not null references ingredients (id),
        amount numeric(6,2) not null,
        amount_type_id integer not null references amount_types (id),
        recipe_id integer not null references recipes (id),
        created_at timestamptz not null default now(),
        updated_at timestamptz not null default now()
      );
    SQL
  end

  def down
    execute <<-SQL
      drop table ingredient_amounts;
    SQL
  end
end
