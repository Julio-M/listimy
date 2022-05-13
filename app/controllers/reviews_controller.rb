class ReviewsController < ApplicationController
    before_action :find_review, only: %i[show destroy]
    before_action :find_rew_free, only: %i[show_rew_free destroy]
    skip_before_action :authorize, only: %i[index show create update show_rew_free destroy]
    skip_before_action :authorize_freelancer, only: %i[show create index update show_rew_free destroy]
    
    
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

   def show_rew_free
        render json: @rev_free
   end

   def destroy
   #don't forget to add before action
    @review.destroy
    head :no_content
   # render json: @review, status :accepted
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

    def find_rew_free
        @rev_free = Review.where(freelancer_id:params[:id])
    end
end
