class FreelancerSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_picture, :cover_photo, :services_photos, :location
end
