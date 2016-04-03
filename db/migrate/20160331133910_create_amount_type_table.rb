class CreateAmountTypeTable < ActiveRecord::Migration
  def up
    execute <<-SQL
      create table amount_types (
        id serial primary key,
        name varchar not null
      );
    SQL
  end

  def down
    execute <<-SQL
      drop table amount_types;
    SQL
  end
end
