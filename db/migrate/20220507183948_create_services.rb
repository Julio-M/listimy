class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :service_name
      t.integer :freelancer_id
      t.integer :service_price
      t.integer :category_id
      t.timestamps
    end
  end
end
