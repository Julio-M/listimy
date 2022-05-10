class Booking < ApplicationRecord
  belongs_to :freelancer
  belongs_to :user

  validates :booking_date, uniqueness:true
end
