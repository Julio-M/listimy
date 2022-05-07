class CreateFreelancers < ActiveRecord::Migration[6.1]
  def change
    create_table :freelancers do |t|
      t.string :username
      t.string :profile_picture
      t.string :cover_photo
      t.string :services_photos
      t.string :location

      t.timestamps
    end
  end
end
