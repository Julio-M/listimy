class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :freelancer_id, :user_id, :stars, :comment

  belongs_to :freelancer
  belongs_to :user
end
