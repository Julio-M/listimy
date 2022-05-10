class Service < ApplicationRecord
    belongs_to :category
    belongs_to :freelancer

    validates :service_name, presence: true, uniqueness: true
end
