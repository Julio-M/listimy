class CategoriesController < ApplicationController
    before_action :find_category, only: %i[show]
    skip_before_action :authorize, only: %i[index show]
    skip_before_action :authorize_freelancer, only: %i[index show]
    
    
    def index
        categories = Category.all
        render json: categories
    end

    def show
        render json: @category
    end

    private
    # goes under private
    #to be used with show, update and destroy
    def find_category
     @category = Category.find(params[:id])
    end
end
