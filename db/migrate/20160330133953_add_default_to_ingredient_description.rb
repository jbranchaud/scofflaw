class AddDefaultToIngredientDescription < ActiveRecord::Migration
  def up
    execute <<-SQL
      alter table ingredients
        alter column description set default '';
    SQL
  end

  def down
    execute <<-SQL
      alter table ingredients
        alter column description drop default;
    SQL
  end
end
