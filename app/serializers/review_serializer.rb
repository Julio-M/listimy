class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :freelancer_id, :user_id, :stars, :comment
end
