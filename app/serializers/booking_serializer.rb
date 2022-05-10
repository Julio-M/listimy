class BookingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :freelancer_id, :booking_date

  belongs_to :user
  belongs_to :freelancer
end
