class Review < ApplicationRecord
    belongs_to :user
    belongs_to :freelancer

    validates :stars, presence:true
    validates :stars,  numericality: {greater_than:0}
    validates :comment, presence:true
end
