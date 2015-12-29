class CreateItemsTable < ActiveRecord::Migration
  def up
    execute <<-SQL
      create table items (
        id serial primary key,
        name varchar not null,
        description text not null,
        item_type_id integer references item_types (id) not null,
        created_at timestamptz not null default now(),
        updated_at timestamptz not null default now()
      );
    SQL
  end

  def down
    execute <<-SQL
      drop table items;
    SQL
  end
end
