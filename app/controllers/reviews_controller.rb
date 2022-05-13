class ReviewsController < ApplicationController
    before_action :find_review, only: %i[show]
    skip_before_action :authorize, only: %i[index show create update]
    skip_before_action :authorize_freelancer, only: %i[show create index update]
    
    
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        render json: @review
    end

   def create
    new_review = Review.create!(rev_params)
    render json: new_review, status: :created
   end
   
  

   private
     #goes under private
   def rev_params
    params.permit(:freelancer_id, :user_id, :stars, :comment)
   end
    # goes under private
    #to be used with show, update and destroy
    def find_review
     @review = Review.find(params[:id])
    end
end
