class Service < ApplicationRecord
    belongs_to :category
    belongs_to :freelancer
    has_many :bookings,dependent: :destroy

    validates :service_name, presence: true, uniqueness: true
end
