class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :user_id
      t.integer :freelancer_id
      t.string :booking_date

      t.timestamps
    end
  end
end
