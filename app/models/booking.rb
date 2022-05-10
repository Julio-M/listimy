class Booking < ApplicationRecord
  belongs_to :freelancer
  belongs_to :user
  belongs_to :service

  validates :booking_date,  presence: true
  validates :service_id,  presence: true
end
