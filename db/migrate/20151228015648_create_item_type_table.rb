class CreateItemTypeTable < ActiveRecord::Migration
  def up
    execute <<-SQL
      create table item_types (
        id serial primary key,
        name varchar not null,
        created_at timestamptz not null default now(),
        updated_at timestamptz not null default now()
      );
    SQL
  end

  def down
    execute <<-SQL
      drop table item_types;
    SQL
  end
end
