class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :freelancer_id
      t.integer :user_id
      t.integer :stars
      t.string :comment

      t.timestamps
    end
  end
end
