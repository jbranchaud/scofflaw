class CreateRecipeTable < ActiveRecord::Migration
  def up
    execute <<-SQL
      create table recipes (
        id serial primary key,
        name varchar not null,
        created_at timestamptz not null default now(),
        updated_at timestamptz not null default now()
      );
    SQL
  end

  def down
    execute <<-SQL
      drop table recipes;
    SQL
  end
end
