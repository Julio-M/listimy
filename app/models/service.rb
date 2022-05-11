class Service < ApplicationRecord
    belongs_to :category
    belongs_to :freelancer
    has_many :bookings

    validates :service_name, presence: true, uniqueness: true
end
