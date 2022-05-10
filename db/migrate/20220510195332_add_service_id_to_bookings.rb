class AddServiceIdToBookings < ActiveRecord::Migration[6.1]
  def change
    add_column :bookings, :service_id, :integer
  end
end
