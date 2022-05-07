class ReviewsController < ApplicationController
    before_action :find_review, only: %i[show]
    
    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        render json: @review
    end

    private
    # goes under private
    #to be used with show, update and destroy
    def find_review
     @review = Review.find(params[:id])
    end
end
